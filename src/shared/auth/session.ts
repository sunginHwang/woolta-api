import express from 'express';
import { AuthType } from './config';
import { clearAuthCookie, setAuthCookie } from './cookie';
import { getRefreshTokenStore } from './refreshStore';
import { issueAuthTokens } from './token';

/** 로그인 성립 — 새 토큰쌍 발급 후 쿠키로만 전달한다(응답 body에 토큰을 싣지 않는다). */
export const startAuthSession = async (res: express.Response, userId: number, loginType: AuthType = 'user') => {
  const tokens = await issueAuthTokens(userId, loginType);
  setAuthCookie(res, tokens.accessToken, tokens.refreshToken);
};

/** 로그아웃 — 서버 측 refresh 무효화까지 수행해야 유출 토큰이 실제로 죽는다. */
export const endAuthSession = async (res: express.Response, userId?: number) => {
  const store = getRefreshTokenStore();

  if (store && userId !== undefined) {
    await store.revokeAllForUser(userId);
  }

  clearAuthCookie(res);
};
