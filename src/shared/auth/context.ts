import express from 'express';
import jwt from 'jsonwebtoken';
import { AuthType, authConfig } from './config';
import { clearAuthCookie, setAuthCookie } from './cookie';
import { getRefreshTokenStore } from './refreshStore';
import { hashToken, issueAuthTokens, verifyToken } from './token';

const { ACCESS_TOKEN_NAME, REFRESH_TOKEN_NAME, REFRESH_STORE_STRICT } = authConfig;

export interface AuthInfo {
  userId: number;
  authType: AuthType;
}

export interface AuthedContext {
  req: express.Request;
  res: express.Response;
  auth: AuthInfo | null;
}

// woolbankApi middleware/isAuthenticated 플로우 이관 + refresh 회전:
// access 쿠키 검증 → 만료 시 refresh 쿠키를 1회용으로 소비하고 새 토큰쌍 재발급 → 인증 정보 반환. 실패 시 null.
export const buildAuthContext = async (req: express.Request, res: express.Response): Promise<AuthInfo | null> => {
  const accessToken = req.cookies?.[ACCESS_TOKEN_NAME];
  const refreshToken = req.cookies?.[REFRESH_TOKEN_NAME];

  if (accessToken) {
    try {
      const decoded = verifyToken(accessToken);
      return { userId: decoded.userId, authType: decoded.loginType };
    } catch (e) {
      if (!(e instanceof jwt.TokenExpiredError)) {
        return null;
      }
    }
  }

  if (!refreshToken) {
    return null;
  }

  return rotateFromRefreshToken(res, refreshToken);
};

/**
 * refresh 토큰으로 세션 갱신. 저장소가 주입돼 있으면 1회용 소비 + 재사용 감지를 수행한다.
 * 성공 시 새 토큰쌍을 쿠키로 내려준다.
 */
export const rotateFromRefreshToken = async (res: express.Response, refreshToken: string): Promise<AuthInfo | null> => {
  let tokenInfo;

  try {
    tokenInfo = verifyToken(refreshToken);
  } catch {
    return null;
  }

  const store = getRefreshTokenStore();
  let familyId: string | undefined;

  if (store) {
    const consumed = await store.consume(hashToken(refreshToken));

    switch (consumed.status) {
      case 'ok':
        familyId = consumed.record.familyId;
        break;
      case 'reused':
        // 폐기된 토큰의 재등장 = 탈취 정황. 해당 로그인 세션 전체를 끊는다.
        await store.revokeFamily(consumed.record.familyId);
        clearAuthCookie(res);
        return null;
      case 'expired':
        return null;
      case 'unknown':
        // 저장소 도입 이전 토큰 / 레거시 woolbankApi 발급분.
        // strict 모드에서는 거부하고, 아니면 새 패밀리로 흡수한다.
        if (REFRESH_STORE_STRICT) {
          return null;
        }
        break;
    }
  }

  const tokens = await issueAuthTokens(tokenInfo.userId, tokenInfo.loginType, familyId);
  setAuthCookie(res, tokens.accessToken, tokens.refreshToken);

  return { userId: tokenInfo.userId, authType: tokenInfo.loginType };
};
