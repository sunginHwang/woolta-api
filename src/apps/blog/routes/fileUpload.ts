import express from 'express';
import multer from 'multer';
import { uploadImage } from '../../image/services/ImageService';

/**
 * 레거시 blog 업로드 경로.
 *
 * 업로드 로직은 image 도메인이 단일 소스다 — 여기서는 위임만 한다.
 * 배포 시점 차이로 구버전 번들이 이 경로를 계속 부를 수 있어 당분간 남겨둔다.
 * FE 가 모두 /image/upload 로 옮겨가면 제거한다.
 *
 * 주의: 레거시 응답 모양(`data.originFileName`)을 유지한다 — 호출부가 그 필드로 URL 을 조립한다.
 */
const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

const toErrorResponse = (e: unknown) => ({
  code: 'UNKNOWN_ERROR',
  message: e instanceof Error ? e.message : 'unknown error',
});

router.post('/image', upload.single('imageFile'), async (req, res) => {
  try {
    const data = await uploadImage(req.file, { appType: 'blog' });
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
      data.push(await uploadImage(file, { appType: 'blog' }));
    }

    res.json({ code: 'SUCCESS', message: 'success upload Images', data });
  } catch (e) {
    console.log(e);
    res.status(500).json(toErrorResponse(e));
  }
});

export default router;
