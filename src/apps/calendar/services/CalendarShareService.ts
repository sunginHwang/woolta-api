import { ForbiddenError, NotFoundError, ValidationError } from '../../../shared/errors';
// 캘린더는 dashboard DB, user 테이블은 woolbank DB — 크로스 DB 라 조인이 불가능해서
// user 도메인의 서비스로 조회만 위임한다. (쓰기는 하지 않는다)
import { getUserById } from '../../user/services/UserService';
import { prismaUser } from '../../user/utils/prismaClient';
import { prismaCalendar } from '../utils/prismaClient';

export const SHARE_STATUS = {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  DECLINED: 'DECLINED',
} as const;

export type ShareStatus = (typeof SHARE_STATUS)[keyof typeof SHARE_STATUS];

interface ShareRow {
  id: number;
  requesterId: number;
  addresseeId: number;
  status: string;
  createdAt: Date;
  respondedAt: Date | null;
}

/** 공유 상대/소유자 표시에 필요한 최소 사용자 정보. 없는 사용자는 탈퇴 등으로 사라진 경우다. */
const FALLBACK_USER = { name: '알 수 없는 사용자', email: '', profileImg: '' };

export const getCalendarUser = async (userId: number) => {
  const user = await getUserById(userId);

  return user
    ? { id: user.id, name: user.name, email: user.email, profileImg: user.profileImg }
    : { id: userId, ...FALLBACK_USER };
};

/**
 * 여러 사용자를 한 번에 조회해 id → 표시 정보 맵으로 돌려준다.
 * 일정 목록은 공유자가 섞여 있어 소유자별로 1건씩 조회하면 N+1 이 된다.
 */
export const getCalendarUserMap = async (userIds: number[]) => {
  const uniqueIds = [...new Set(userIds)];
  if (uniqueIds.length === 0) {
    return new Map<number, Awaited<ReturnType<typeof getCalendarUser>>>();
  }

  const users = await prismaUser.user.findMany({ where: { id: { in: uniqueIds } } });
  const userMap = new Map(
    users.map((user) => [user.id, { id: user.id, name: user.name, email: user.email, profileImg: user.profileImg }]),
  );

  // 조회되지 않은 id 도 자리를 채워 호출부가 분기하지 않게 한다
  uniqueIds.forEach((id) => {
    if (!userMap.has(id)) {
      userMap.set(id, { id, ...FALLBACK_USER });
    }
  });

  return userMap;
};

/** 양방향이라 내가 requester 든 addressee 든 반대편이 상대다. */
const getCounterpartId = (share: Pick<ShareRow, 'requesterId' | 'addresseeId'>, userId: number) =>
  share.requesterId === userId ? share.addresseeId : share.requesterId;

const toCalendarShare = async (share: ShareRow, userId: number) => ({
  id: share.id,
  status: share.status as ShareStatus,
  isOutgoing: share.requesterId === userId,
  counterpart: await getCalendarUser(getCounterpartId(share, userId)),
  createdAt: share.createdAt,
  respondedAt: share.respondedAt,
});

const toCalendarShareList = async (shares: ShareRow[], userId: number) => {
  const userMap = await getCalendarUserMap(shares.map((share) => getCounterpartId(share, userId)));
  const itemList = shares.map((share) => ({
    id: share.id,
    status: share.status as ShareStatus,
    isOutgoing: share.requesterId === userId,
    counterpart: userMap.get(getCounterpartId(share, userId))!,
    createdAt: share.createdAt,
    respondedAt: share.respondedAt,
  }));

  return { totalCount: itemList.length, itemList };
};

/**
 * 내 일정과 함께 볼 수 있는 사용자 id 목록 (나 자신 포함).
 * 수락된 공유 1행이 양방향 열람을 뜻하므로 requester/addressee 양쪽 컬럼을 모두 본다.
 */
export const getVisibleUserIds = async (userId: number): Promise<number[]> => {
  const accepted = await prismaCalendar.calendarShare.findMany({
    where: {
      status: SHARE_STATUS.ACCEPTED,
      OR: [{ requesterId: userId }, { addresseeId: userId }],
    },
    select: { requesterId: true, addresseeId: true },
  });

  return [userId, ...accepted.map((share) => getCounterpartId(share, userId))];
};

/** 공유 현황 — 수락된 관계 + 내가 보낸 대기 중 초대. 받은 대기 초대는 알림 쪽에서 따로 본다. */
export const getShareList = async (userId: number) => {
  const shares = await prismaCalendar.calendarShare.findMany({
    where: {
      OR: [
        { status: SHARE_STATUS.ACCEPTED, requesterId: userId },
        { status: SHARE_STATUS.ACCEPTED, addresseeId: userId },
        { status: SHARE_STATUS.PENDING, requesterId: userId },
      ],
    },
    orderBy: { createdAt: 'desc' },
  });

  return toCalendarShareList(shares, userId);
};

/** 내가 받은 대기 중 초대 — 로그인 직후 알림 배지용. */
export const getPendingShareList = async (userId: number) => {
  const shares = await prismaCalendar.calendarShare.findMany({
    where: { addresseeId: userId, status: SHARE_STATUS.PENDING },
    orderBy: { createdAt: 'desc' },
  });

  return toCalendarShareList(shares, userId);
};

/**
 * 이메일로 상대를 찾아 초대한다.
 *
 * 실패 사유를 에러가 아니라 코드로 돌려준다 — '이미 공유 중' 같은 건 예외가 아니고
 * 화면이 상황별 안내를 띄워야 하기 때문이다.
 *
 * 역방향 초대가 대기 중이면(= 상대가 먼저 나를 초대했다) 새 행을 만들지 않고 그 초대를 수락한다.
 * 그러지 않으면 서로 초대한 두 행이 남아 어느 쪽이 권한의 근거인지 모호해진다.
 */
export const requestShare = async (userId: number, email: string) => {
  const normalizedEmail = email.trim().toLowerCase();

  if (normalizedEmail === '') {
    throw new ValidationError('이메일을 입력해주세요.');
  }

  const target = await prismaUser.user.findFirst({ where: { email: normalizedEmail } });

  if (!target) {
    return { code: 'USER_NOT_FOUND' as const, share: null };
  }
  if (target.id === userId) {
    return { code: 'SELF' as const, share: null };
  }

  const existing = await prismaCalendar.calendarShare.findFirst({
    where: {
      OR: [
        { requesterId: userId, addresseeId: target.id },
        { requesterId: target.id, addresseeId: userId },
      ],
    },
  });

  if (existing?.status === SHARE_STATUS.ACCEPTED) {
    return { code: 'ALREADY_SHARED' as const, share: await toCalendarShare(existing, userId) };
  }

  if (existing?.status === SHARE_STATUS.PENDING) {
    if (existing.requesterId === userId) {
      return { code: 'ALREADY_PENDING' as const, share: await toCalendarShare(existing, userId) };
    }

    // 상대가 먼저 보낸 초대가 대기 중 — 맞초대 대신 그 초대를 수락한다
    const accepted = await prismaCalendar.calendarShare.update({
      where: { id: existing.id },
      data: { status: SHARE_STATUS.ACCEPTED, respondedAt: new Date() },
    });
    return { code: 'ACCEPTED_MUTUAL' as const, share: await toCalendarShare(accepted, userId) };
  }

  // 거절된 이력이 있으면 같은 행을 다시 대기 상태로 돌린다 (유니크 키가 쌍 단위라 재생성 불가)
  if (existing) {
    const reopened = await prismaCalendar.calendarShare.update({
      where: { id: existing.id },
      data: {
        requesterId: userId,
        addresseeId: target.id,
        status: SHARE_STATUS.PENDING,
        respondedAt: null,
      },
    });
    return { code: 'REQUESTED' as const, share: await toCalendarShare(reopened, userId) };
  }

  const created = await prismaCalendar.calendarShare.create({
    data: { requesterId: userId, addresseeId: target.id, status: SHARE_STATUS.PENDING },
  });

  return { code: 'REQUESTED' as const, share: await toCalendarShare(created, userId) };
};

/** 받은 초대에 응답한다. 수락/거절 권한은 addressee 에게만 있다. */
export const respondShare = async (userId: number, id: number, isAccepted: boolean) => {
  const share = await prismaCalendar.calendarShare.findUnique({ where: { id } });

  if (!share || share.addresseeId !== userId) {
    throw new NotFoundError('존재하지 않는 공유 요청입니다.');
  }
  if (share.status !== SHARE_STATUS.PENDING) {
    throw new ValidationError('이미 처리된 공유 요청입니다.');
  }

  const updated = await prismaCalendar.calendarShare.update({
    where: { id },
    data: {
      status: isAccepted ? SHARE_STATUS.ACCEPTED : SHARE_STATUS.DECLINED,
      respondedAt: new Date(),
    },
  });

  return toCalendarShare(updated, userId);
};

/**
 * 공유 취소/해제.
 * 대기 중 초대는 보낸 사람만, 수락된 공유는 양쪽 누구나 끊을 수 있다(읽기 권한이 서로 걸려 있으므로).
 */
export const cancelShare = async (userId: number, id: number): Promise<boolean> => {
  const share = await prismaCalendar.calendarShare.findUnique({ where: { id } });

  if (!share || (share.requesterId !== userId && share.addresseeId !== userId)) {
    throw new NotFoundError('존재하지 않는 공유입니다.');
  }
  if (share.status === SHARE_STATUS.PENDING && share.requesterId !== userId) {
    throw new ForbiddenError('받은 초대는 거절로 처리해주세요.');
  }

  await prismaCalendar.calendarShare.delete({ where: { id } });
  return true;
};
