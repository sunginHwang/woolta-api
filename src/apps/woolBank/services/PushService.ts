import { createHash } from 'node:crypto';
import webpush from 'web-push';
import { ValidationError } from '../../../shared/errors';
import { prismaWoolBank } from '../utils/prismaClient';

/**
 * Web Push(PWA 알림) — 구독 저장과 발송.
 *
 * VAPID 키는 블로그 도메인(DB 테이블)과 달리 env 로 관리한다. 키가 없으면 부팅은 되고
 * 발송만 no-op 으로 막는다(fail closed) — 구독 저장은 그대로 동작하므로 키를 넣고 재기동하면 바로 쓸 수 있다.
 */
const VAPID_PUBLIC_KEY = process.env.WOOLBANK_VAPID_PUBLIC_KEY;
const VAPID_PRIVATE_KEY = process.env.WOOLBANK_VAPID_PRIVATE_KEY;
const VAPID_SUBJECT = process.env.WOOLBANK_VAPID_SUBJECT ?? 'https://bank.woolta.com';
export const WOOLBANK_APP_URL = process.env.WOOLBANK_APP_URL ?? 'https://bank.woolta.com';

const vapidDetails =
  VAPID_PUBLIC_KEY && VAPID_PRIVATE_KEY
    ? { subject: VAPID_SUBJECT, publicKey: VAPID_PUBLIC_KEY, privateKey: VAPID_PRIVATE_KEY }
    : null;

if (!vapidDetails) {
  console.warn('woolBank push DISABLED (WOOLBANK_VAPID_PUBLIC_KEY / WOOLBANK_VAPID_PRIVATE_KEY 미설정)');
}

/** 푸시 서비스가 구독이 사라졌다고 답하는 상태 — 그 구독은 즉시 지운다. */
const GONE_STATUS_CODES = new Set([404, 410]);

const hashEndpoint = (endpoint: string) => createHash('sha256').update(endpoint).digest('hex');

/**
 * 브라우저 푸시 서비스 호스트 허용 목록. endpoint 는 유저 입력이고 서버가 거기로 POST 하므로
 * 아무 주소나 받으면 내부망 호출(SSRF)에 쓰일 수 있다 — https + 알려진 호스트만 저장한다.
 * Chrome/Edge(Chromium)/Brave/Opera: fcm.googleapis.com, Firefox: *.push.services.mozilla.com,
 * Safari: *.push.apple.com, 구 Edge: *.notify.windows.com, Samsung Internet: *.push.samsungosp.com
 */
const PUSH_HOST_SUFFIXES = [
  'fcm.googleapis.com',
  '.push.services.mozilla.com',
  '.push.apple.com',
  '.notify.windows.com',
  '.push.samsungosp.com',
];
const MAX_ENDPOINT_LENGTH = 2048;
const MAX_KEY_LENGTH = 255;

const isAllowedPushHost = (hostname: string) =>
  PUSH_HOST_SUFFIXES.some((suffix) => (suffix.startsWith('.') ? hostname.endsWith(suffix) : hostname === suffix));

export const assertValidSubscription = ({ endpoint, p256dh, auth }: SubscriptionInput) => {
  if (endpoint.length > MAX_ENDPOINT_LENGTH || p256dh.length > MAX_KEY_LENGTH || auth.length > MAX_KEY_LENGTH) {
    throw new ValidationError('푸시 구독 정보가 너무 깁니다.', 'push subscription too long');
  }

  let url: URL;
  try {
    url = new URL(endpoint);
  } catch {
    throw new ValidationError('푸시 endpoint 형식이 올바르지 않습니다.', 'invalid push endpoint');
  }

  if (url.protocol !== 'https:' || !isAllowedPushHost(url.hostname)) {
    throw new ValidationError('허용되지 않은 푸시 endpoint 입니다.', `push endpoint host not allowed: ${url.hostname}`);
  }
};

export interface SubscriptionInput {
  endpoint: string;
  p256dh: string;
  auth: string;
  expirationTime?: Date | string | null;
  userAgent?: string | null;
}

/**
 * 공유코드 세션도 여기로 온다 — 세션 userId 가 원 계정이라 그 기기도 원 계정 구독으로 저장되고,
 * 원 계정에 보내는 알림을 함께 받는다.
 */
export const upsertSubscription = async (userId: number, input: SubscriptionInput) => {
  assertValidSubscription(input);

  const endpointHash = hashEndpoint(input.endpoint);
  const expirationTime = input.expirationTime ? new Date(input.expirationTime) : null;
  const userAgent = input.userAgent?.slice(0, 255) ?? null;

  // 같은 기기가 다른 계정으로 로그인해 재구독하면 소유자를 바꾼다(endpoint 는 기기당 하나).
  await prismaWoolBank.userPushSubscription.upsert({
    where: { endpointHash },
    create: {
      userId,
      endpoint: input.endpoint,
      endpointHash,
      p256dh: input.p256dh,
      auth: input.auth,
      expirationTime,
      userAgent,
    },
    update: { userId, p256dh: input.p256dh, auth: input.auth, expirationTime, userAgent },
  });

  return true;
};

export const removeSubscription = async (userId: number, endpoint: string) => {
  await prismaWoolBank.userPushSubscription.deleteMany({ where: { userId, endpointHash: hashEndpoint(endpoint) } });

  return true;
};

const DEFAULT_SETTING = { regularExpenditure: true };

export interface PushSettingInput {
  regularExpenditure: boolean;
}

/** 행이 없으면 기본값(모두 ON) — 구독만 하면 바로 알림이 가도록. */
export const getSetting = async (userId: number): Promise<PushSettingInput> => {
  const setting = await prismaWoolBank.userPushSetting.findUnique({ where: { userId } });

  return setting ? { regularExpenditure: setting.regularExpenditure } : DEFAULT_SETTING;
};

export const updateSetting = async (userId: number, input: PushSettingInput): Promise<PushSettingInput> => {
  const setting = await prismaWoolBank.userPushSetting.upsert({
    where: { userId },
    create: { userId, regularExpenditure: input.regularExpenditure },
    update: { regularExpenditure: input.regularExpenditure },
  });

  return { regularExpenditure: setting.regularExpenditure };
};

export const getPushStatus = async (userId: number, endpoint?: string | null) => {
  const [subscriptionCount, subscribed, setting] = await Promise.all([
    prismaWoolBank.userPushSubscription.count({ where: { userId } }),
    endpoint
      ? prismaWoolBank.userPushSubscription.findFirst({
          where: { userId, endpointHash: hashEndpoint(endpoint) },
          select: { id: true },
        })
      : Promise.resolve(null),
    getSetting(userId),
  ]);

  return { isSubscribed: subscribed !== null, subscriptionCount, setting };
};

/**
 * Declarative Web Push 페이로드 (Safari 18.4+ 는 서비스워커 없이 이대로 띄운다).
 * Chrome/Firefox 와 구형 iOS 는 서비스워커 push 핸들러가 같은 JSON 을 읽어 showNotification 한다.
 * @see https://webkit.org/blog/16535/meet-declarative-web-push/
 */
export interface DeclarativePushInput {
  title: string;
  body: string;
  /** 알림 클릭 시 열 절대 URL (필수) */
  navigate: string;
  /** 같은 tag 의 기존 알림을 교체한다 */
  tag?: string;
  /** 홈화면 아이콘 뱃지 숫자 (Badging API 지원 환경) */
  appBadge?: number;
}

export interface DeclarativePushPayload {
  web_push: 8030;
  notification: {
    title: string;
    body: string;
    navigate: string;
    lang: string;
    tag?: string;
    app_badge?: number;
  };
}

export const buildDeclarativePayload = ({
  title,
  body,
  navigate,
  tag,
  appBadge,
}: DeclarativePushInput): DeclarativePushPayload => ({
  web_push: 8030,
  notification: {
    title,
    body,
    navigate,
    lang: 'ko',
    ...(tag ? { tag } : {}),
    ...(appBadge !== undefined ? { app_badge: appBadge } : {}),
  },
});

export interface SendOptions {
  /** 같은 topic 의 미수신 메시지를 대체한다(쌓이지 않게). */
  topic?: string;
  /** 초 단위. 기본 1일 */
  ttl?: number;
  urgency?: 'very-low' | 'low' | 'normal' | 'high';
  /** 주면 이 기기(구독)로만 보낸다 */
  endpoint?: string | null;
}

const DEFAULT_TTL_SECONDS = 60 * 60 * 24;

/** 유저의 모든 기기로 발송. 성공한 기기 수를 돌려준다. */
export const sendToUser = async (
  userId: number,
  payload: DeclarativePushPayload,
  options: SendOptions = {},
): Promise<number> => {
  if (!vapidDetails) {
    return 0;
  }

  const subscriptions = await prismaWoolBank.userPushSubscription.findMany({
    where: options.endpoint ? { userId, endpointHash: hashEndpoint(options.endpoint) } : { userId },
  });

  if (subscriptions.length === 0) {
    return 0;
  }

  const body = JSON.stringify(payload);
  const sentAt = new Date();
  let sentCount = 0;

  await Promise.all(
    subscriptions.map(async (subscription) => {
      try {
        await webpush.sendNotification(
          { endpoint: subscription.endpoint, keys: { p256dh: subscription.p256dh, auth: subscription.auth } },
          body,
          { vapidDetails, TTL: options.ttl ?? DEFAULT_TTL_SECONDS, urgency: options.urgency, topic: options.topic },
        );
        sentCount += 1;
        await prismaWoolBank.userPushSubscription.update({
          where: { id: subscription.id },
          data: { lastSentAt: sentAt },
        });
      } catch (error) {
        const statusCode = (error as { statusCode?: number }).statusCode;

        if (statusCode !== undefined && GONE_STATUS_CODES.has(statusCode)) {
          // 브라우저에서 구독이 해지됐거나 만료됐다 — 다시 보내봐야 계속 실패하므로 지운다.
          await prismaWoolBank.userPushSubscription.delete({ where: { id: subscription.id } }).catch(() => undefined);
          return;
        }

        console.log(
          `woolBank push fail userId:${userId} subscriptionId:${subscription.id} status:${statusCode}`,
          error,
        );
      }
    }),
  );

  return sentCount;
};

export const sendTestPush = async (userId: number, endpoint?: string | null) => {
  const sent = await sendToUser(
    userId,
    buildDeclarativePayload({
      title: '뱅킷리스트 알림 테스트',
      body: '알림이 정상적으로 켜졌어요. 정기지출 결제 전날 알려드릴게요.',
      navigate: `${WOOLBANK_APP_URL}/my-page`,
      tag: 'test',
    }),
    { topic: 'test', ttl: 60 * 10, urgency: 'high', endpoint },
  );

  return sent > 0;
};
