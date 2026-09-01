// woolbankApi config.js 이관 — 앱 전반 공용 인증 설정
export const authConfig = {
  ACCESS_TOKEN_NAME: 'w.access',
  REFRESH_TOKEN_NAME: 'w.refresh',
  SECRET_TOKEN_KEY: process.env.AUTH_SECRET_TOKEN_KEY ?? 'test',
  // access는 짧게, 재발급은 buildAuthContext가 refresh 쿠키로 자동 처리한다.
  ACCESS_TOKEN_EXPIRE: '15m',
  ACCESS_REFRESH_EXPIRE: '60d',
  COOKIE_DOMAIN: process.env.AUTH_COOKIE_DOMAIN ?? '.woolta.com',
  // 동일 오리진(리버스 프록시) 구성이면 lax로 CSRF가 대부분 닫힌다.
  // 크로스 오리진이 실제로 필요할 때만 none으로 올리고 CORS_ORIGINS를 함께 설정할 것.
  COOKIE_SAME_SITE: (process.env.AUTH_COOKIE_SAMESITE ?? 'lax') as 'lax' | 'strict' | 'none',
  // refresh 저장소에 없는 토큰(레거시 woolbankApi 발급분)을 거부할지 여부.
  // 레거시 Koa 서버가 내려가면 AUTH_REFRESH_STORE_STRICT=1 로 켠다.
  REFRESH_STORE_STRICT: process.env.AUTH_REFRESH_STORE_STRICT === '1',
  // 회전 레이스 유예창. access 만료 직후 동시 요청 N개가 같은 refresh를 함께 쓰는 건 정상이므로
  // 소비 직후 이 시간 안의 재제출은 탈취가 아니라 레이스로 본다. (0이면 유예 없음)
  REFRESH_REUSE_GRACE_MS: Number(process.env.AUTH_REFRESH_REUSE_GRACE_MS ?? 10_000),
} as const;

export type AuthType = 'user' | 'share' | 'none';

export interface ITokenInfo {
  userId: number;
  loginType: AuthType;
  iat: number;
  exp: number;
  /** refresh 토큰에만 존재 — 같은 초에 발급해도 토큰 문자열이 겹치지 않게 하는 난수 */
  jti?: string;
}
