import crypto from 'crypto';
import fs from 'fs/promises';
import path from 'path';
import express from 'express';
import multer from 'multer';
import sharp from 'sharp';

// 원본 woolbankApi utils/upload.imageUpload 포팅 — 원본 저장 + 80x80 썸네일 생성
const uploadPath = process.env.WOOLBANK_UPLOAD_PATH ?? path.join(process.cwd(), 'uploads');
const uploadUrl = process.env.WOOLBANK_UPLOAD_URL ?? 'https://banketlist-api.woolta.com';

const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

const imageUpload = async (file: Express.Multer.File) => {
  const uniqueId = crypto.randomBytes(16).toString('hex');
  const fileName = `${uniqueId}_${file.originalname}`;

  const originDir = uploadPath;
  const thumbDir = path.join(uploadPath, 'thumb');

  await fs.mkdir(thumbDir, { recursive: true });
  await fs.writeFile(path.join(originDir, fileName), file.buffer);
  await sharp(file.buffer).resize(80, 80, { fit: 'fill' }).toFile(path.join(thumbDir, fileName));

  return {
    imageUrl: `${uploadUrl}/uploads/${fileName}`,
    thumbImageUrl: `${uploadUrl}/uploads/thumb/${fileName}`,
  };
};

router.post('/image', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      res.status(400).json({ message: '파일이 존재하지 않습니다.' });
      return;
    }

    res.json(await imageUpload(req.file));
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: '파일 업로드 실패' });
  }
});

export default router;
