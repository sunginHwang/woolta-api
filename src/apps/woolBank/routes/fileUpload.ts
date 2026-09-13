import express from 'express';
import multer from 'multer';
import { uploadImage } from '../../image/services/ImageService';

/**
 * 레거시 woolBank 업로드 경로.
 *
 * 업로드 로직은 image 도메인이 단일 소스다 — 여기서는 위임만 한다.
 * FE 가 모두 /image/upload 로 옮겨가면 제거한다.
 *
 * 주의: 레거시 응답 모양(`{ imageUrl, thumbImageUrl }` 최상위)을 유지한다.
 */
const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

router.post('/image', upload.single('image'), async (req, res) => {
  try {
    const { imageUrl, thumbImageUrl } = await uploadImage(req.file, { appType: 'bank', thumbnail: true });
    res.json({ imageUrl, thumbImageUrl });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: e instanceof Error ? e.message : '파일 업로드 실패' });
  }
});

export default router;
