import { addDays, getDate, isLastDayOfMonth, setDate } from 'date-fns';
import lodash from 'lodash';
const { range } = lodash;
import { ForbiddenError, NotFoundError } from '../../../shared/errors';
import { prismaWoolBank } from '../utils/prismaClient';
import { createAndPush } from './NotificationService';
import { getSetting } from './PushService';

export const getRegularExpenditureListByUserId = async (userId: number, limit: number = 100) => {
  return prismaWoolBank.regularExpenditure.findMany({
    where: { userId },
    orderBy: { id: 'desc' },
    take: limit,
    include: {
      accountBookCategory: {
        include: {
          accountBookCategoryImage: true,
        },
      },
    },
  });
};

export const getExpenditureAccountBookCategories = async (userId: number) => {
  return prismaWoolBank.accountBookCategory.findMany({
    where: { userId, delYn: false, type: 'expenditure' },
    orderBy: { id: 'desc' },
    include: {
      accountBookCategoryImage: true,
    },
  });
};

export const createRegularExpenditure = async (
  userId: number,
  {
    title,
    amount,
    regularDate,
    isAutoExpenditure,
    categoryId,
  }: {
    title: string;
    amount: number;
    regularDate: number;
    isAutoExpenditure: boolean;
    categoryId: number;
  },
) => {
  // 원본 saveRegularExpenditure: 카테고리 소유 검증
  const accountBookCategory = await prismaWoolBank.accountBookCategory.findFirst({
    where: { id: categoryId, userId },
  });

  if (!accountBookCategory) {
    throw new NotFoundError('사용가능한 지출 타입이 아닙니다.');
  }

  return prismaWoolBank.regularExpenditure.create({
    include: {
      accountBookCategory: {
        include: {
          accountBookCategoryImage: true,
        },
      },
    },
    data: {
      userId,
      title,
      amount,
      regularDate,
      accountBookCategoryId: categoryId,
      isAutoExpenditure,
    },
  });
};

export const deleteRegularExpenditure = async (id: number) => {
  const regularExpenditure = await prismaWoolBank.regularExpenditure.findUnique({ where: { id } });

  if (!regularExpenditure) {
    throw new ForbiddenError('삭제할 정기 내역이 존재하지 않습니다.', 'not found regular expenditure');
  }

  try {
    await prismaWoolBank.regularExpenditure.delete({ where: { id: regularExpenditure.id } });
    return true;
  } catch {
    return false;
  }
};

// 원본 regularExpenditureService.scheduleRegularExpenditure — 매일 자정 정기지출을 가계부에 벌크 등록.
// 말일이면서 31일이 아닌 경우 해당일~31일 정기지출을 몰아서 처리(짧은 달 보정).
export const scheduleRegularExpenditure = async () => {
  const now = new Date();
  const nowDate = getDate(now);
  const isNot31 = nowDate !== 31;
  const findDays = isLastDayOfMonth(now) && isNot31 ? range(nowDate, 32) : [nowDate];

  try {
    await prismaWoolBank.$transaction(async (tx) => {
      const regularExpenditureList = await tx.regularExpenditure.findMany({
        where: { regularDate: { in: findDays } },
        orderBy: { id: 'desc' },
      });

      if (regularExpenditureList.length === 0) {
        return;
      }

      const regularExpendituresToDelete: number[] = [];

      for (const regularExpenditure of regularExpenditureList) {
        const { title, amount, userId, accountBookCategoryId, regularDate, installmentMonth, paidInstallmentMonth } =
          regularExpenditure;

        const newAccountBook: Parameters<typeof tx.accountBook.create>[0]['data'] = {
          title,
          amount,
          memo: '',
          regularDate,
          type: 'expenditure',
          isRegularExpenditure: true,
          registerDateTime: setDate(now, regularDate),
          userId,
          accountBookCategoryId,
        };

        // 할부: 납부 횟수 증가, 완납 시 정기지출 삭제 (원본 로직)
        if (installmentMonth && installmentMonth > 0) {
          const nextPaidInstallmentMonth = (paidInstallmentMonth ?? 0) + 1;

          newAccountBook.installmentMonth = installmentMonth;
          newAccountBook.paidInstallmentMonth = nextPaidInstallmentMonth;

          if (nextPaidInstallmentMonth >= installmentMonth) {
            regularExpendituresToDelete.push(regularExpenditure.id);
          } else {
            await tx.regularExpenditure.update({
              where: { id: regularExpenditure.id },
              data: { paidInstallmentMonth: nextPaidInstallmentMonth },
            });
          }
        }

        await tx.accountBook.create({ data: newAccountBook });
      }

      if (regularExpendituresToDelete.length > 0) {
        await tx.regularExpenditure.deleteMany({ where: { id: { in: regularExpendituresToDelete } } });
      }
    });
  } catch (e) {
    console.log(e);
  }
};

/**
 * 내일 결제되는 정기지출의 regularDate 목록.
 * scheduleRegularExpenditure 와 같은 말일 보정 — 내일이 말일이면서 31일이 아니면 내일~31일을 모두 포함한다
 * (30일에 등록한 정기지출도 2월엔 28일에 빠져나가므로 알림도 그날 전에 가야 한다).
 */
export const getUpcomingRegularDates = (now: Date): number[] => {
  const tomorrow = addDays(now, 1);
  const tomorrowDate = getDate(tomorrow);

  return isLastDayOfMonth(tomorrow) && tomorrowDate !== 31 ? range(tomorrowDate, 32) : [tomorrowDate];
};

const formatAmount = (amount: number) => `${amount.toLocaleString('ko-KR')}원`;

const sumAmount = (items: { amount: number }[]) => items.reduce((sum, item) => sum + item.amount, 0);

/** 푸시 본문 한 줄: "넷플릭스 외 2건 · 32,000원" */
const buildUpcomingSummary = (items: { title: string; amount: number }[]) => {
  const [first] = items;
  const head = items.length === 1 ? first.title : `${first.title} 외 ${items.length - 1}건`;

  return `${head} · ${formatAmount(sumAmount(items))}`;
};

/** 알림 상세 본문: 항목별 한 줄 + 합계 */
const buildUpcomingContent = (items: { title: string; amount: number }[]) =>
  [
    ...items.map((item) => `• ${item.title} · ${formatAmount(item.amount)}`),
    '',
    `합계 ${formatAmount(sumAmount(items))}`,
  ].join('\n');

// 매일 09:00 — 내일 결제 예정인 정기지출을 유저별로 묶어 알림함에 1건 저장하고 푸시한다. 알림을 남긴 유저 수를 돌려준다.
export const notifyUpcomingRegularExpenditure = async (now: Date = new Date()): Promise<number> => {
  try {
    const regularExpenditureList = await prismaWoolBank.regularExpenditure.findMany({
      where: { regularDate: { in: getUpcomingRegularDates(now) } },
      orderBy: [{ userId: 'asc' }, { amount: 'desc' }],
      select: { userId: true, title: true, amount: true },
    });

    const byUser = new Map<number, { title: string; amount: number }[]>();

    for (const { userId, title, amount } of regularExpenditureList) {
      byUser.set(userId, [...(byUser.get(userId) ?? []), { title, amount }]);
    }

    let notifiedUserCount = 0;

    for (const [userId, items] of byUser) {
      const setting = await getSetting(userId);

      if (!setting.regularExpenditure) {
        continue;
      }

      // 한 유저의 저장/발송 실패가 나머지 유저의 알림까지 막으면 안 된다.
      try {
        await createAndPush(userId, {
          kind: 'REGULAR_EXPENDITURE',
          title: '내일 정기지출 결제 예정',
          summary: buildUpcomingSummary(items),
          content: buildUpcomingContent(items),
        });
        notifiedUserCount += 1;
      } catch (e) {
        console.log(`regular expenditure notify fail userId:${userId}`, e);
      }
    }

    return notifiedUserCount;
  } catch (e) {
    console.log(e);
    return 0;
  }
};
