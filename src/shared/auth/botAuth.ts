import crypto from 'crypto';
import express from 'express';
import { authConfig } from './config';
import type { AuthInfo } from './context';

const { BOT_TOKEN, BOT_USER_IDS, BOT_USER_ID_HEADER, BOT_ALLOWED_PATHS } = authConfig;

/** 이 길이 미만의 토큰은 추측 가능하다고 보고 봇 인증 자체를 켜지 않는다. */
const BOT_TOKEN_MIN_LENGTH = 32;
const BEARER_PREFIX = 'bearer ';

const isBotAuthEnabled = BOT_TOKEN.length >= BOT_TOKEN_MIN_LENGTH;

if (BOT_TOKEN && !isBotAuthEnabled) {
  console.warn(`[auth] WOOLTA_BOT_TOKEN이 ${BOT_TOKEN_MIN_LENGTH}자 미만이라 봇 토큰 인증을 비활성화합니다.`);
}

// 길이 차이로도 정보가 새지 않도록 sha256 다이제스트(항상 32바이트)끼리 상수 시간 비교한다.
const isSameToken = (candidate: string, secret: string) => {
  const candidateDigest = crypto.createHash('sha256').update(candidate).digest();
  const secretDigest = crypto.createHash('sha256').update(secret).digest();

  return crypto.timingSafeEqual(candidateDigest, secretDigest);
};

/**
 * matched=false: Authorization 헤더가 없어 봇 경로가 아님(쿠키 인증으로 넘어가야 한다).
 * matched=true: 봇 경로로 판정됨. auth가 null이면 인증 실패이며 쿠키로 폴스루하지 않는다.
 */
export type BotAuthResult = { matched: false } | { matched: true; auth: AuthInfo | null };

const NOT_MATCHED: BotAuthResult = { matched: false };

/**
 * 봇 서버 간 인증. `Authorization: Bearer <WOOLTA_BOT_TOKEN>` + `x-woolta-user-id` 조합으로
 * 허용목록에 있는 userId를 대행한다. 토큰 값은 어떤 경우에도 로그에 남기지 않는다.
 */
export const resolveBotAuth = (req: express.Request): BotAuthResult => {
  const header = req.headers.authorization;

  if (!header || !header.toLowerCase().startsWith(BEARER_PREFIX)) {
    return NOT_MATCHED;
  }

  if (!isBotAuthEnabled) {
    return { matched: true, auth: null };
  }

  const requestedUserId = String(req.headers[BOT_USER_ID_HEADER] ?? '').trim();
  const token = header.slice(BEARER_PREFIX.length).trim();

  // 로그에 req.ip 를 쓰지 않는다: trust proxy 미설정이라 프록시 주소가 찍혀 오해를 부르고, 토큰은 절대 남기지 않는다.
  if (!token || !isSameToken(token, BOT_TOKEN)) {
    console.warn(
      `[auth] 봇 토큰 불일치 — requestedUserId=${requestedUserId || '(없음)'} path=${req.originalUrl.split('?')[0]}`,
    );

    return { matched: true, auth: null };
  }

  // 토큰이 맞아도 허용 경로 밖(가계부·블로그 등)은 대행하지 않는다. 유출 시 피해 범위를 캘린더로 한정한다.
  // Apollo 미들웨어는 app.use('/calendar/graphql', …) 로 마운트돼 req.path 가 '/' 로 잘리므로 originalUrl 을 본다.
  const requestPath = req.originalUrl.split('?')[0];

  if (!BOT_ALLOWED_PATHS.includes(requestPath)) {
    console.warn(`[auth] 봇 허용 경로 밖의 요청 — path=${requestPath}`);

    return { matched: true, auth: null };
  }

  const userId = Number(requestedUserId);

  if (!requestedUserId || !Number.isInteger(userId) || userId <= 0 || !BOT_USER_IDS.includes(userId)) {
    console.warn(`[auth] 봇 허용목록 밖의 대행 요청 — requestedUserId=${requestedUserId || '(없음)'}`);

    return { matched: true, auth: null };
  }

  return { matched: true, auth: { userId, authType: 'user' } };
};
