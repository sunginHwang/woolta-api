import jwt from 'jsonwebtoken';
import { AuthType, ITokenInfo, authConfig } from './config';

const { SECRET_TOKEN_KEY, ACCESS_TOKEN_EXPIRE, ACCESS_REFRESH_EXPIRE } = authConfig;

// woolbankApi authService.tokenGenerator와 동일 스펙(HS512, {userId, loginType}) — 기존 발급 토큰과 호환된다
export const tokenGenerator = ({
  tokenType,
  userId,
  loginType,
}: {
  tokenType: 'access' | 'refresh';
  userId: number;
  loginType: AuthType;
}) => {
  const expireTime = tokenType === 'refresh' ? ACCESS_REFRESH_EXPIRE : ACCESS_TOKEN_EXPIRE;

  return jwt.sign({ userId, loginType }, SECRET_TOKEN_KEY, {
    algorithm: 'HS512',
    expiresIn: expireTime,
  });
};

export const createAuthToken = (userId: number, loginType: AuthType = 'user') => {
  return {
    accessToken: tokenGenerator({ tokenType: 'access', userId, loginType }),
    refreshToken: tokenGenerator({ tokenType: 'refresh', userId, loginType }),
  };
};

export const verifyToken = (token: string): ITokenInfo => {
  return jwt.verify(token, SECRET_TOKEN_KEY) as ITokenInfo;
};

export const getRefreshTokenInfo = async (token: string): Promise<ITokenInfo> => {
  return verifyToken(token);
};
