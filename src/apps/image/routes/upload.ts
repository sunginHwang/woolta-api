import express from 'express';
import multer from 'multer';
import { AppError } from '../../../shared/errors';
import { requireLogin } from '../middlewares/requireLogin';
import { toAppType, uploadImage } from '../services/ImageService';

/**
 * 이미지·동영상 업로드.
 *
 * GraphQL 이 아니라 REST 인 이유는 multipart 다 — 파일 전송은 이쪽이 자연스럽다.
 * 조회는 이 서버가 하지 않는다. nginx(image.woolta.com)가 업로드 디렉터리를 직접 읽어 내려준다.
 */
const MAX_FILE_SIZE = 20 * 1024 * 1024;
const MAX_FILES = 10;

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: MAX_FILE_SIZE, files: MAX_FILES },
});

const router = express.Router();

/** 서비스가 던지는 도메인 에러를 HTTP 로 옮긴다. 그 외는 500. */
const toErrorResponse = (e: unknown) =>
  e instanceof AppError
    ? { status: 400, body: { code: e.code, message: e.message } }
    : { status: 500, body: { code: 'UNKNOWN_ERROR', message: e instanceof Error ? e.message : 'unknown error' } };

const isTruthy = (value: unknown) => value === 'true' || value === '1' || value === true;

/**
 * 단건 업로드.
 *
 * 필드명은 `file` 이지만 레거시 호출부와의 호환을 위해 `image`·`imageFile` 도 받는다
 * (blog 는 imageFile, woolBank 는 image 를 쓴다).
 */
router.post(
  '/upload',
  requireLogin,
  upload.fields([
    { name: 'file', maxCount: 1 },
    { name: 'image', maxCount: 1 },
    { name: 'imageFile', maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const files = req.files as Record<string, Express.Multer.File[]> | undefined;
      const file = files?.file?.[0] ?? files?.image?.[0] ?? files?.imageFile?.[0];

      const data = await uploadImage(file, {
        appType: toAppType(req.body?.type),
        thumbnail: isTruthy(req.body?.thumbnail),
      });

      res.json({ code: 'SUCCESS', message: 'success upload image', data });
    } catch (e) {
      const { status, body } = toErrorResponse(e);
      res.status(status).json(body);
    }
  },
);

/** 다건 업로드 — 한 건이라도 실패하면 전체를 실패로 돌린다(부분 성공은 호출부가 감당하기 어렵다). */
router.post('/uploads', requireLogin, upload.array('files', MAX_FILES), async (req, res) => {
  try {
    const files = (req.files ?? []) as Express.Multer.File[];
    const appType = toAppType(req.body?.type);
    const thumbnail = isTruthy(req.body?.thumbnail);

    const data = [];
    for (const file of files) {
      data.push(await uploadImage(file, { appType, thumbnail }));
    }

    res.json({ code: 'SUCCESS', message: 'success upload images', data });
  } catch (e) {
    const { status, body } = toErrorResponse(e);
    res.status(status).json(body);
  }
});

export default router;
