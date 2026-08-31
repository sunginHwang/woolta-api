import express from 'express';
import { AppError } from '../../../shared/errors';
import { prismaBlog } from '../utils/prismaClient';

// TODO: 별도 유저 인증 서비스 연동 시 이 파일만 교체한다.
// 지금은 BLOG_AUTHOR_USER_NO 환경변수로 지정한 유저를 작성자로 사용하는 임시 구현.
export const getCurrentUser = async (_req?: express.Request) => {
  const userNo = Number(process.env.BLOG_AUTHOR_USER_NO ?? 1);

  const user = await prismaBlog.user.findUnique({ where: { no: userNo } });

  if (!user) {
    throw new AppError('존재하지 않는 사용자입니다. 다시 로그인해주세요.', 'UNAUTHORIZED');
  }

  return user;
};
