import crypto from 'crypto';
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { ValidationError } from '../../../shared/errors';
// 업로드 이력은 blog DB 의 post_file 에 쌓는다. 레거시 이름이지만 blog 전용이 아니다 —
// appType 으로 앱을 구분해 모든 앱이 같은 테이블을 쓴다.
import { prismaBlog } from '../../blog/utils/prismaClient';

/**
 * 업로드한 앱. 대시보드 앱 레일의 key 와 맞춘다.
 * 지정하지 않으면 ETC 다 — 기존 호출부가 type 없이 불러도 깨지지 않게 한다.
 */
export const APP_TYPES = ['blog', 'memo', 'bank', 'article', 'todo', 'calendar', 'schedule', 'etc'] as const;
export type AppType = (typeof APP_TYPES)[number];

const DEFAULT_APP_TYPE: AppType = 'etc';

export const toAppType = (value: unknown): AppType =>
  typeof value === 'string' && (APP_TYPES as readonly string[]).includes(value) ? (value as AppType) : DEFAULT_APP_TYPE;

/**
 * 저장 경로와 조회 URL.
 *
 * 조회는 woolta-api 가 하지 않는다 — nginx(image.woolta.com)가 이 디렉터리를 직접 읽어 내려준다.
 * 그래서 업로드 서버는 nginx 와 **같은 디스크**를 봐야 한다.
 */
const uploadPath = process.env.IMAGE_UPLOAD_PATH ?? process.env.BLOG_UPLOAD_PATH ?? '/home/blog/post/upload/';
const publicUrl = (process.env.IMAGE_PUBLIC_URL ?? 'https://image.woolta.com').replace(/\/$/, '');

/** 썸네일은 원본 옆 thumb/ 에 둔다 (woolbank 원본 동작 유지). */
const THUMB_DIR = 'thumb';
const THUMB_SIZE = 80;

interface AllowedType {
  ext: string;
  mime: string;
  /** 정지 이미지만 썸네일을 만들 수 있다 */
  thumbnailable: boolean;
  /** 파일 선두 바이트 — 확장자만 믿지 않기 위한 검증용 */
  magic: { offset: number; bytes: number[] }[];
}

/**
 * 허용 타입.
 *
 * 확장자만 보면 `.png` 로 이름만 바꾼 임의 파일이 통과한다(레거시 동작).
 * 선두 바이트로 실제 형식을 함께 확인한다.
 */
const ALLOWED: AllowedType[] = [
  { ext: 'png', mime: 'image/png', thumbnailable: true, magic: [{ offset: 0, bytes: [0x89, 0x50, 0x4e, 0x47] }] },
  { ext: 'jpg', mime: 'image/jpeg', thumbnailable: true, magic: [{ offset: 0, bytes: [0xff, 0xd8, 0xff] }] },
  { ext: 'jpeg', mime: 'image/jpeg', thumbnailable: true, magic: [{ offset: 0, bytes: [0xff, 0xd8, 0xff] }] },
  { ext: 'gif', mime: 'image/gif', thumbnailable: true, magic: [{ offset: 0, bytes: [0x47, 0x49, 0x46, 0x38] }] },
  { ext: 'bmp', mime: 'image/bmp', thumbnailable: true, magic: [{ offset: 0, bytes: [0x42, 0x4d] }] },
  {
    ext: 'webp',
    mime: 'image/webp',
    thumbnailable: true,
    // RIFF....WEBP
    magic: [
      { offset: 0, bytes: [0x52, 0x49, 0x46, 0x46] },
      { offset: 8, bytes: [0x57, 0x45, 0x42, 0x50] },
    ],
  },
  // ftyp 박스 — mp4/webm 은 브라우저가 재생하는 동영상이라 썸네일을 만들지 않는다(sharp 미지원)
  { ext: 'mp4', mime: 'video/mp4', thumbnailable: false, magic: [{ offset: 4, bytes: [0x66, 0x74, 0x79, 0x70] }] },
  {
    ext: 'webm',
    mime: 'video/webm',
    thumbnailable: false,
    magic: [{ offset: 0, bytes: [0x1a, 0x45, 0xdf, 0xa3] }],
  },
];

const matchesMagic = (buffer: Buffer, type: AllowedType) =>
  type.magic.every((sig) => sig.bytes.every((byte, i) => buffer[sig.offset + i] === byte));

const getExtension = (fileName: string) => fileName.slice(fileName.lastIndexOf('.') + 1).toLowerCase();

export interface UploadedImage {
  originFileName: string;
  fileName: string;
  fileExt: string;
  mimeType: string;
  size: number;
  imageUrl: string;
  /** 썸네일을 만들지 못한 형식(동영상)이면 없다 */
  thumbImageUrl?: string;
}

export interface UploadOptions {
  appType: AppType;
  /** 80x80 썸네일을 함께 만들지 — 동영상이면 요청해도 만들지 않는다 */
  thumbnail?: boolean;
}

/**
 * 파일 하나를 저장하고 이력을 남긴다.
 *
 * 파일명은 crypto 로 만든다. 레거시는 `Math.random()` 기반이라 충돌·추측 위험이 있었다.
 */
export const uploadImage = async (
  file: Express.Multer.File | undefined,
  { appType, thumbnail = false }: UploadOptions,
): Promise<UploadedImage> => {
  if (!file) {
    throw new ValidationError('파일이 존재하지 않습니다.');
  }

  const originalName = path.basename(file.originalname);

  if (originalName.includes('..')) {
    throw new ValidationError(`잘못된 파일 경로입니다: ${originalName}`);
  }

  const ext = getExtension(originalName);
  const allowed = ALLOWED.find((type) => type.ext === ext);

  if (!allowed) {
    throw new ValidationError(`지원하지 않는 형식입니다: ${ext || '확장자 없음'}`);
  }

  if (!matchesMagic(file.buffer, allowed)) {
    throw new ValidationError(`파일 내용이 ${ext} 형식이 아닙니다.`);
  }

  const storedName = `${crypto.randomBytes(16).toString('hex')}.${allowed.ext}`;

  await fs.mkdir(uploadPath, { recursive: true });
  await fs.writeFile(path.join(uploadPath, storedName), file.buffer);

  let thumbImageUrl: string | undefined;

  if (thumbnail && allowed.thumbnailable) {
    const thumbDir = path.join(uploadPath, THUMB_DIR);
    await fs.mkdir(thumbDir, { recursive: true });
    await sharp(file.buffer).resize(THUMB_SIZE, THUMB_SIZE, { fit: 'fill' }).toFile(path.join(thumbDir, storedName));
    thumbImageUrl = `${publicUrl}/${THUMB_DIR}/${storedName}`;
  }

  await prismaBlog.postFile.create({
    data: {
      originFileName: storedName,
      fileName: originalName,
      fileDir: uploadPath,
      fileExt: allowed.ext,
      fullPath: path.join(uploadPath, storedName),
      size: file.size,
      appType,
      mimeType: allowed.mime,
    },
  });

  return {
    originFileName: storedName,
    fileName: originalName,
    fileExt: allowed.ext,
    mimeType: allowed.mime,
    size: file.size,
    imageUrl: `${publicUrl}/${storedName}`,
    thumbImageUrl,
  };
};
