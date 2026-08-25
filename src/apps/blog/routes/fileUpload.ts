import crypto from 'crypto';
import fs from 'fs/promises';
import path from 'path';
import express from 'express';
import multer from 'multer';
import { prismaBlog } from '../utils/prismaClient';

// 원본 ImageUtil 포팅. 업로드 경로는 원본 하드코딩(/home/blog/post/upload/) 대신 환경변수로 오버라이드 가능.
const uploadPath = process.env.BLOG_UPLOAD_PATH ?? '/home/blog/post/upload/';
const url = '';
const allowImageExt = /^(png|jpg|bmp|gif|jpeg)$/;

const upload = multer({ storage: multer.memoryStorage() });

class ImageUploadException extends Error {}

const uploadImage = async (file: Express.Multer.File | undefined) => {
  if (!file) {
    throw new ImageUploadException('[IMAGE_UTIL] file not exist');
  }

  const fileName = file.originalname;
  const ext = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();
  const uploadFileName = `${crypto.randomBytes(8).toString('hex')}.${ext}`;

  if (!allowImageExt.test(ext)) {
    throw new ImageUploadException(`[IMAGE_UTIL] ${fileName} ext : ${ext} is not image format`);
  }

  if (fileName.includes('..')) {
    throw new ImageUploadException(`[IMAGE_UTIL] invalid file path imageName: ${fileName}`);
  }

  await fs.mkdir(uploadPath, { recursive: true });
  await fs.writeFile(path.join(uploadPath, uploadFileName), file.buffer);

  // 원본 UploadFileResponse 필드 그대로: originFileName=생성된 파일명, fileName=클라이언트 원본 파일명
  const image = {
    originFileName: uploadFileName,
    fileName,
    fileDir: uploadPath,
    fileExt: ext,
    fullPath: url + uploadPath + uploadFileName,
    size: file.size,
  };

  await prismaBlog.postFile.create({ data: image });

  return image;
};

const toErrorResponse = (e: unknown) => ({
  code: 'UNKNOWN_ERROR',
  message: e instanceof Error ? e.message : 'unknown error',
});

const router = express.Router();

router.post('/image', upload.single('imageFile'), async (req, res) => {
  try {
    const data = await uploadImage(req.file);
    res.json({ code: 'SUCCESS', message: 'success upload Image', data });
  } catch (e) {
    console.log(e);
    res.status(500).json(toErrorResponse(e));
  }
});

router.post('/images', upload.array('imageFiles'), async (req, res) => {
  try {
    const files = (req.files ?? []) as Express.Multer.File[];
    const data = [];

    for (const file of files) {
      data.push(await uploadImage(file));
    }

    res.json({ code: 'SUCCESS', message: 'success upload Images', data });
  } catch (e) {
    console.log(e);
    res.status(500).json(toErrorResponse(e));
  }
});

export default router;
