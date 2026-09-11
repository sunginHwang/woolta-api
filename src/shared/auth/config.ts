// woolbankApi config.js 이관 — 앱 전반 공용 인증 설정

// 쉼표 구분 문자열을 양의 정수 배열로 바꾼다. 형식 오류 항목은 버리되, 오타로 가족 한 명이 조용히
// 빠지는 일을 막기 위해 버린 항목이 있으면 부팅 시 경고를 남긴다.
const parseIdList = (raw: string | undefined): number[] => {
  const entries = (raw ?? '')
    .split(',')
    .map((value) => value.trim())
    .filter((value) => value !== '');
  const ids = entries.map(Number).filter((value) => Number.isInteger(value) && value > 0);

  if (ids.length !== entries.length) {
    console.warn(`[auth] WOOLTA_BOT_USER_IDS 항목 ${entries.length - ids.length}개가 양의 정수가 아니라 무시됩니다.`);
  }

  return ids;
};

// 쉼표 구분 경로 목록. 비어 있으면 기본값 하나만.
const parsePathList = (raw: string | undefined, fallback: string[]): string[] => {
  const paths = (raw ?? '')
    .split(',')
    .map((value) => value.trim())
    .filter((value) => value.startsWith('/'));

  return paths.length > 0 ? paths : fallback;
};

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
  // 봇 서버(aiho 등)가 가족 userId를 대행할 때 쓰는 서버 간 인증 토큰.
  // 미설정이면 봇 인증 자체가 비활성이며, Bearer 헤더는 전부 거부된다.
  BOT_TOKEN: process.env.WOOLTA_BOT_TOKEN ?? '',
  // 봇이 대행할 수 있는 userId 허용목록. 미설정이면 목록이 비어 봇 인증이 전부 거부된다(fail-closed).
  BOT_USER_IDS: parseIdList(process.env.WOOLTA_BOT_USER_IDS),
  // 봇이 "누구를 대행하는지" 지정하는 요청 헤더 이름.
  BOT_USER_ID_HEADER: 'x-woolta-user-id',
  // 봇 토큰으로 호출할 수 있는 경로 허용목록. 토큰이 유출돼도 가계부 등 다른 도메인까지 대행하지 못하게
  // 기본은 캘린더 하나만 연다. aiho 가 todo 를 쓰게 되면 WOOLTA_BOT_ALLOWED_PATHS 에 /todo/graphql 을 추가한다.
  BOT_ALLOWED_PATHS: parsePathList(process.env.WOOLTA_BOT_ALLOWED_PATHS, ['/calendar/graphql']),
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
