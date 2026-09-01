import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { AuthType, ITokenInfo, authConfig } from './config';
import { getRefreshTokenStore } from './refreshStore';

const { SECRET_TOKEN_KEY, ACCESS_TOKEN_EXPIRE, ACCESS_REFRESH_EXPIRE } = authConfig;

// woolbankApi authService.tokenGenerator와 동일 스펙(HS512, {userId, loginType}) — 기존 발급 토큰과 호환된다.
// refresh에만 jti를 추가한다(추가 클레임이라 레거시 검증은 그대로 통과).
// jti가 없으면 같은 초에 회전할 때 동일한 토큰 문자열이 나와 재사용으로 오탐된다.
export const tokenGenerator = ({
  tokenType,
  userId,
  loginType,
}: {
  tokenType: 'access' | 'refresh';
  userId: number;
  loginType: AuthType;
}) => {
  const isRefresh = tokenType === 'refresh';
  const payload = isRefresh ? { userId, loginType, jti: crypto.randomUUID() } : { userId, loginType };

  return jwt.sign(payload, SECRET_TOKEN_KEY, {
    algorithm: 'HS512',
    expiresIn: isRefresh ? ACCESS_REFRESH_EXPIRE : ACCESS_TOKEN_EXPIRE,
  });
};

export const verifyToken = (token: string): ITokenInfo => {
  return jwt.verify(token, SECRET_TOKEN_KEY) as ITokenInfo;
};

/** 저장소 조회 키 — 평문 refresh 토큰은 DB에 남기지 않는다. */
export const hashToken = (token: string) => {
  return crypto.createHash('sha256').update(token).digest('hex');
};

export interface IssuedTokens {
  accessToken: string;
  refreshToken: string;
  familyId: string;
}

/**
 * access/refresh 발급 + refresh 저장소 기록.
 * familyId를 넘기면 회전(같은 로그인 세션 유지), 생략하면 새 로그인 세션.
 */
export const issueAuthTokens = async (
  userId: number,
  loginType: AuthType = 'user',
  familyId?: string,
): Promise<IssuedTokens> => {
  const accessToken = tokenGenerator({ tokenType: 'access', userId, loginType });
  const refreshToken = tokenGenerator({ tokenType: 'refresh', userId, loginType });
  const resolvedFamilyId = familyId ?? crypto.randomUUID();

  const store = getRefreshTokenStore();

  if (store) {
    const { exp } = jwt.decode(refreshToken) as { exp: number };
    await store.save({
      userId,
      loginType,
      familyId: resolvedFamilyId,
      tokenHash: hashToken(refreshToken),
      expiresAt: new Date(exp * 1000),
    });
  }

  return { accessToken, refreshToken, familyId: resolvedFamilyId };
};
