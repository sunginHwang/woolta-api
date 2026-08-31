import { getDate, isLastDayOfMonth, setDate } from 'date-fns';
import lodash from 'lodash';
const { range } = lodash;
import { ForbiddenError, NotFoundError } from '../../../shared/errors';
import { prismaWoolBank } from '../utils/prismaClient';

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
