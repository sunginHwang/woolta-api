import express from 'express';
import { TokenExpiredError } from 'jsonwebtoken';
import { AuthType, authConfig } from './config';
import { setAuthCookie } from './cookie';
import { createAuthToken, verifyToken } from './token';

const { ACCESS_TOKEN_NAME, REFRESH_TOKEN_NAME } = authConfig;

export interface AuthInfo {
  userId: number;
  authType: AuthType;
}

export interface AuthedContext {
  req: express.Request;
  res: express.Response;
  auth: AuthInfo | null;
}

// woolbankApi middleware/isAuthenticated 플로우 이관:
// access 쿠키 검증 → 만료 시 refresh 쿠키로 토큰 재발급(쿠키 재세팅) → 인증 정보 반환. 실패 시 null.
export const buildAuthContext = async (req: express.Request, res: express.Response): Promise<AuthInfo | null> => {
  const accessToken = req.cookies?.[ACCESS_TOKEN_NAME];
  const refreshToken = req.cookies?.[REFRESH_TOKEN_NAME];

  if (!accessToken) {
    return null;
  }

  try {
    const decoded = verifyToken(accessToken);
    return { userId: decoded.userId, authType: decoded.loginType };
  } catch (e) {
    if (e instanceof TokenExpiredError && refreshToken) {
      try {
        const tokenInfo = verifyToken(refreshToken);
        const authTokens = createAuthToken(tokenInfo.userId, tokenInfo.loginType);
        setAuthCookie(res, authTokens.accessToken, authTokens.refreshToken);
        return { userId: tokenInfo.userId, authType: tokenInfo.loginType };
      } catch {
        return null;
      }
    }
    return null;
  }
};
