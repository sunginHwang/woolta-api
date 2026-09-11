import { ForbiddenError, NotFoundError, ValidationError } from '../../../shared/errors';
import type {
  CalendarEventRangeInput,
  CreateCalendarEventInput,
  UpdateCalendarEventInput,
} from '../generates/types.generated';
import { prismaCalendar } from '../utils/prismaClient';
import { getCalendarUserMap, getVisibleUserIds } from './CalendarShareService';

const MAX_TITLE_LENGTH = 255;
const MAX_DESCRIPTION_LENGTH = 5_000;
// 범위 조회 상한 — 월 뷰가 최대 6주라 1년이면 충분하고, 실수로 전체를 긁는 걸 막는다
const MAX_RANGE_DAYS = 400;

interface EventRow {
  id: string;
  userId: number;
  title: string;
  description: string | null;
  startAt: Date;
  endAt: Date;
  isAllDay: boolean;
  color: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const assertTitle = (title: string) => {
  if (title.trim() === '') {
    throw new ValidationError('일정 제목을 입력해주세요.');
  }
  if (title.length > MAX_TITLE_LENGTH) {
    throw new ValidationError(`일정 제목은 ${MAX_TITLE_LENGTH}자를 넘을 수 없습니다.`);
  }
};

const assertDescription = (description?: string | null) => {
  if (description && description.length > MAX_DESCRIPTION_LENGTH) {
    throw new ValidationError(`일정 설명은 ${MAX_DESCRIPTION_LENGTH}자를 넘을 수 없습니다.`);
  }
};

/** endAt 은 exclusive 라 startAt 과 같아도 안 된다 (길이 0 일정은 렌더할 수 없다). */
const assertRange = (startAt: Date, endAt: Date) => {
  if (endAt.getTime() <= startAt.getTime()) {
    throw new ValidationError('종료 시각은 시작 시각보다 뒤여야 합니다.');
  }
};

const toCalendarEvent = (event: EventRow, userId: number, owner: { id: number; name: string; email: string; profileImg: string }) => ({
  id: event.id,
  title: event.title,
  description: event.description,
  startAt: event.startAt,
  endAt: event.endAt,
  isAllDay: event.isAllDay,
  color: event.color,
  owner,
  isMine: event.userId === userId,
  createdAt: event.createdAt,
  updatedAt: event.updatedAt,
});

/**
 * 기간과 겹치는 일정 — 내 일정 + 공유 수락된 상대의 일정.
 *
 * 겹침 판정은 `startAt < range.endAt AND endAt > range.startAt` 이다.
 * `startAt` 만 보면 기간을 가로지르는 장기 일정(예: 지난주 시작 → 다음주 종료)이 빠진다.
 */
export const getEventList = async (userId: number, range: CalendarEventRangeInput) => {
  const startAt = new Date(range.startAt);
  const endAt = new Date(range.endAt);

  assertRange(startAt, endAt);
  if ((endAt.getTime() - startAt.getTime()) / 86_400_000 > MAX_RANGE_DAYS) {
    throw new ValidationError(`조회 기간은 ${MAX_RANGE_DAYS}일을 넘을 수 없습니다.`);
  }

  const visibleUserIds = await getVisibleUserIds(userId);

  const events = await prismaCalendar.calendarEvent.findMany({
    where: {
      userId: { in: visibleUserIds },
      startAt: { lt: endAt },
      endAt: { gt: startAt },
    },
    orderBy: [{ startAt: 'asc' }, { id: 'asc' }],
  });

  const ownerMap = await getCalendarUserMap(events.map((event) => event.userId));
  const itemList = events.map((event) => toCalendarEvent(event, userId, ownerMap.get(event.userId)!));

  return { totalCount: itemList.length, itemList };
};

/** 쓰기는 소유자만 — 공유는 읽기 전용이다. */
const getOwnEvent = async (id: string, userId: number) => {
  const event = await prismaCalendar.calendarEvent.findUnique({ where: { id } });

  if (!event) {
    throw new NotFoundError('존재하지 않는 일정입니다.');
  }
  if (event.userId !== userId) {
    throw new ForbiddenError('공유받은 일정은 수정할 수 없습니다.');
  }

  return event;
};

const withOwner = async (event: EventRow, userId: number) => {
  const ownerMap = await getCalendarUserMap([event.userId]);
  return toCalendarEvent(event, userId, ownerMap.get(event.userId)!);
};

export const createEvent = async (userId: number, input: CreateCalendarEventInput) => {
  assertTitle(input.title);
  assertDescription(input.description);

  const startAt = new Date(input.startAt);
  const endAt = new Date(input.endAt);
  assertRange(startAt, endAt);

  const created = await prismaCalendar.calendarEvent.create({
    data: {
      userId,
      title: input.title.trim(),
      description: input.description ?? null,
      startAt,
      endAt,
      isAllDay: input.isAllDay ?? false,
      color: input.color ?? null,
    },
  });

  return withOwner(created, userId);
};

export const updateEvent = async (userId: number, input: UpdateCalendarEventInput) => {
  const event = await getOwnEvent(input.id, userId);

  if (input.title !== undefined && input.title !== null) {
    assertTitle(input.title);
  }
  assertDescription(input.description);

  // 한쪽만 바뀌어도 기존 값과 비교해야 하므로 병합 후 검증한다
  const startAt = input.startAt === undefined || input.startAt === null ? event.startAt : new Date(input.startAt);
  const endAt = input.endAt === undefined || input.endAt === null ? event.endAt : new Date(input.endAt);
  assertRange(startAt, endAt);

  const updated = await prismaCalendar.calendarEvent.update({
    where: { id: input.id },
    data: {
      ...(input.title !== undefined && input.title !== null ? { title: input.title.trim() } : {}),
      ...(input.description !== undefined ? { description: input.description } : {}),
      startAt,
      endAt,
      ...(input.isAllDay !== undefined && input.isAllDay !== null ? { isAllDay: input.isAllDay } : {}),
      ...(input.color !== undefined ? { color: input.color } : {}),
    },
  });

  return withOwner(updated, userId);
};

export const deleteEvent = async (userId: number, id: string): Promise<boolean> => {
  await getOwnEvent(id, userId);
  await prismaCalendar.calendarEvent.delete({ where: { id } });

  return true;
};
