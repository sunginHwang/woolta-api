import { NotFoundError, ValidationError } from '../../../shared/errors';
import { prismaWoolBank } from '../utils/prismaClient';
import { buildDeclarativePayload, sendToUser, WOOLBANK_APP_URL } from './PushService';

/**
 * 알림함 — 푸시로 보낸 알림의 제목·요약·상세를 보관한다.
 *
 * 푸시 알림은 짧게(title + summary) 가고, 클릭하면 /notifications/{id} 에서 content 를 본다.
 * aiho 봇(createWoolBankNotification)과 정기지출 결제 전날 cron 이 같은 createAndPush 를 쓴다.
 * 공유코드 세션은 원 계정 userId 로 들어오므로 알림함도 계정 단위로 함께 본다.
 */
const KIND_PATTERN = /^[A-Z0-9_]{1,40}$/;
const MAX_TITLE_LENGTH = 100;
const MAX_SUMMARY_LENGTH = 255;
const MAX_CONTENT_LENGTH = 10_000;
const DEFAULT_LIST_LIMIT = 50;
const PUSH_TTL_SECONDS = 60 * 60 * 12;

export interface NotificationInput {
  kind: string;
  title: string;
  summary: string;
  content: string;
}

export interface CreateAndPushInput extends NotificationInput {
  /** false 면 알림함에만 저장한다. 기본 true */
  sendPush?: boolean | null;
}

const assertValidNotification = ({ kind, title, summary, content }: NotificationInput) => {
  if (!KIND_PATTERN.test(kind)) {
    throw new ValidationError('알림 종류(kind)는 대문자·숫자·밑줄 40자 이내여야 합니다.', `invalid kind: ${kind}`);
  }
  if (title.trim() === '' || title.length > MAX_TITLE_LENGTH) {
    throw new ValidationError(`알림 제목은 1~${MAX_TITLE_LENGTH}자여야 합니다.`, 'invalid title');
  }
  if (summary.trim() === '' || summary.length > MAX_SUMMARY_LENGTH) {
    throw new ValidationError(`알림 요약은 1~${MAX_SUMMARY_LENGTH}자여야 합니다.`, 'invalid summary');
  }
  if (content.trim() === '' || content.length > MAX_CONTENT_LENGTH) {
    throw new ValidationError(`알림 본문은 1~${MAX_CONTENT_LENGTH}자여야 합니다.`, 'invalid content');
  }
};

export const createNotification = async (userId: number, input: NotificationInput) => {
  assertValidNotification(input);

  return prismaWoolBank.userNotification.create({
    data: { userId, kind: input.kind, title: input.title, summary: input.summary, content: input.content },
  });
};

/** 푸시 topic 은 URL-safe 32자 이내여야 한다. kind 를 그 규칙에 맞춘다. */
const topicOf = (kind: string) =>
  kind
    .toLowerCase()
    .replace(/[^a-z0-9_-]/g, '-')
    .slice(0, 32);

/**
 * 저장하고 이 계정의 모든 기기로 푸시를 보낸다. 푸시 실패는 알림함 저장을 되돌리지 않는다 —
 * 기기가 없거나 키가 꺼져 있어도 알림함에는 남아야 한다.
 */
export const createAndPush = async (userId: number, input: CreateAndPushInput) => {
  const notification = await createNotification(userId, input);

  if (input.sendPush === false) {
    return notification;
  }

  try {
    await sendToUser(
      userId,
      buildDeclarativePayload({
        title: notification.title,
        body: notification.summary,
        navigate: `${WOOLBANK_APP_URL}/notifications/${notification.id}`,
        tag: `notification-${notification.kind.toLowerCase()}`,
      }),
      { topic: topicOf(notification.kind), ttl: PUSH_TTL_SECONDS },
    );
  } catch (error) {
    console.log(`woolBank notification push fail userId:${userId} notificationId:${notification.id}`, error);
  }

  return notification;
};

const MAX_LIST_LIMIT = 100;

/** GraphQL ID(문자열)를 정수 id 로. 숫자가 아니면 null — 조회 결과 "없음"으로 처리해 500 을 내지 않는다. */
export const parseNotificationId = (id: string): number | null => {
  const n = Number(id);
  return Number.isSafeInteger(n) && n > 0 ? n : null;
};

export const getNotification = async (userId: number, id: number | null) => {
  if (id === null) {
    return null;
  }

  return prismaWoolBank.userNotification.findFirst({ where: { id, userId } });
};

export const listNotifications = async (userId: number, limit: number = DEFAULT_LIST_LIMIT) => {
  // 음수면 Prisma 가 뒤에서부터 가져오고, 너무 크면 content(최대 1만 자)까지 통째로 올라온다 — 1..100 으로 묶는다.
  const take = Number.isFinite(limit) ? Math.min(Math.max(Math.trunc(limit), 1), MAX_LIST_LIMIT) : DEFAULT_LIST_LIMIT;
  const [totalCount, itemList] = await Promise.all([
    prismaWoolBank.userNotification.count({ where: { userId } }),
    prismaWoolBank.userNotification.findMany({ where: { userId }, orderBy: { id: 'desc' }, take }),
  ]);

  return { totalCount, itemList };
};

export const countUnread = async (userId: number) => {
  return prismaWoolBank.userNotification.count({ where: { userId, readAt: null } });
};

/** 이미 읽은 알림은 readAt 을 유지한다(처음 읽은 시각이 의미 있다). */
export const markRead = async (userId: number, id: number | null) => {
  const notification = await getNotification(userId, id);

  if (!notification) {
    throw new NotFoundError('알림을 찾을 수 없습니다.', `notification not found: ${id}`);
  }

  if (notification.readAt) {
    return notification;
  }

  return prismaWoolBank.userNotification.update({ where: { id: notification.id }, data: { readAt: new Date() } });
};

export const markAllRead = async (userId: number) => {
  await prismaWoolBank.userNotification.updateMany({ where: { userId, readAt: null }, data: { readAt: new Date() } });

  return true;
};
