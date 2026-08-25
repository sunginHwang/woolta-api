// woolbankApi config.js 이관 — 앱 전반 공용 인증 설정
export const authConfig = {
  ACCESS_TOKEN_NAME: 'w.access',
  REFRESH_TOKEN_NAME: 'w.refresh',
  SECRET_TOKEN_KEY: process.env.AUTH_SECRET_TOKEN_KEY ?? 'test',
  ACCESS_TOKEN_EXPIRE: '7d',
  ACCESS_REFRESH_EXPIRE: '60d',
} as const;

export type AuthType = 'user' | 'share' | 'none';

export interface ITokenInfo {
  userId: number;
  loginType: AuthType;
  iat: number;
  exp: number;
}
