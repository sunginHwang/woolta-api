import type express from 'express';
import { buildAuthContext } from '../../../shared/auth';

/**
 * 업로드 로그인 게이트.
 *
 * 레거시 업로드 라우트는 인증이 없어 누구나 디스크에 파일을 쌓을 수 있었다.
 * 대시보드의 모든 앱이 로그인 뒤에서 동작하므로 세션을 요구한다.
 * 공유코드 세션(authType !== 'user')은 읽기 전용이라 거부한다.
 */
export const requireLogin: express.RequestHandler = async (req, res, next) => {
  const auth = await buildAuthContext(req, res);

  if (!auth) {
    res.status(401).json({ code: 'UNAUTHENTICATED', message: '인증 토큰 정보가 존재하지 않습니다.' });
    return;
  }

  if (auth.authType !== 'user') {
    res.status(403).json({ code: 'FORBIDDEN', message: '권한이 없습니다.' });
    return;
  }

  next();
};
