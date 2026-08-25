import express from 'express';
import { authConfig } from './config';

const { ACCESS_TOKEN_NAME, REFRESH_TOKEN_NAME } = authConfig;

// woolbankApi utils/common.setAuthCookie 이관 — .woolta.com 도메인 공유 쿠키
export const setAuthCookie = (res: express.Response, accessToken: string, refreshToken: string) => {
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);

  const options: express.CookieOptions = {
    expires,
    httpOnly: true,
    secure: true,
    domain: '.woolta.com',
    sameSite: 'none',
  };

  res.cookie(ACCESS_TOKEN_NAME, accessToken, options);
  res.cookie(REFRESH_TOKEN_NAME, refreshToken, options);
};
