import express from 'express';
import { authConfig } from './config';

const { ACCESS_TOKEN_NAME, REFRESH_TOKEN_NAME, COOKIE_DOMAIN, COOKIE_SAME_SITE } = authConfig;

const baseOptions = (): express.CookieOptions => ({
  httpOnly: true,
  secure: true,
  domain: COOKIE_DOMAIN,
  sameSite: COOKIE_SAME_SITE,
  path: '/',
});

// woolbankApi utils/common.setAuthCookie 이관 — .woolta.com 도메인 공유 쿠키
export const setAuthCookie = (res: express.Response, accessToken: string, refreshToken: string) => {
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);

  const options: express.CookieOptions = { ...baseOptions(), expires };

  res.cookie(ACCESS_TOKEN_NAME, accessToken, options);
  res.cookie(REFRESH_TOKEN_NAME, refreshToken, options);
};

// 로그아웃 — 빈 값 덮어쓰기가 아니라 실제 삭제. 속성이 세팅 때와 같아야 브라우저가 지운다.
export const clearAuthCookie = (res: express.Response) => {
  res.clearCookie(ACCESS_TOKEN_NAME, baseOptions());
  res.clearCookie(REFRESH_TOKEN_NAME, baseOptions());
};
