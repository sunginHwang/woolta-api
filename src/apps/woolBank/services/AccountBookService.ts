import { endOfDay, endOfMonth, startOfDay, startOfMonth } from 'date-fns';
import * as _ from 'lodash';
import { ForbiddenError } from '../../../shared/errors';
import { DbAccountBookCategoryType, DbScheduledPaymentType } from '../utils/enums';
import { prismaWoolBank } from '../utils/prismaClient';

export const getAccountBookByIdAndUserId = async (id: number, userId: number) => {
  return prismaWoolBank.accountBook.findFirst({
    where: { id, userId },
    include: {
      accountBookCategory: {
        include: {
          accountBookCategoryImage: true,
        },
      },
    },
  });
};

// 원본 GET /account-books — 조회 기준일이 속한 달 전체
export const getAccountBookListByMonth = async (userId: number, dateTime: Date | string) => {
  const startDate = startOfMonth(new Date(dateTime));
  const endDate = endOfMonth(new Date(dateTime));

  return prismaWoolBank.accountBook.findMany({
    orderBy: { id: 'desc' },
    include: {
      accountBookCategory: {
        include: {
          accountBookCategoryImage: true,
        },
      },
    },
    where: {
      userId,
      registerDateTime: {
        gte: startDate,
        lte: endDate,
      },
    },
  });
};

// 원본 통계 조회 — 카테고리별 합계/비중 집계 후 금액 내림차순
export const getAccountBookStatisticList = async (
  userId: number,
  {
    type,
    startDate,
    endDate,
  }: {
    type: DbAccountBookCategoryType;
    startDate: Date | string;
    endDate: Date | string;
  },
) => {
  const accountBookList = await prismaWoolBank.accountBook.findMany({
    include: { accountBookCategory: true },
    where: {
      userId,
      type,
      registerDateTime: {
        gte: startOfDay(new Date(startDate)),
        lte: endOfDay(new Date(endDate)),
      },
    },
  });

  const totalAmount = accountBookList.reduce((acc, accountBook) => acc + accountBook.amount, 0);

  return _.chain(accountBookList)
    .groupBy('accountBookCategoryId')
    .map((item, key) => {
      const amount = item.reduce((prev, acc) => prev + acc.amount, 0);
      const percentage = Number(((amount / totalAmount) * 100).toFixed(0));
      const accountBookCategory = item[0].accountBookCategory;
      return {
        amount,
        percentage,
        categoryId: key,
        useStatistic: accountBookCategory.useStatistic,
        categoryName: accountBookCategory.name,
        list: item
          .map(({ title, amount, registerDateTime }) => {
            return { title, amount, registerDateTime };
          })
          .sort((a, b) => b.amount - a.amount),
      };
    })
    .sort((a, b) => b.amount - a.amount)
    .value();
};

// 원본 saveAccountBook: scheduledPayment(반복/할부) 지정 시 정기지출 동시 생성 트랜잭션
export const createAccountBook = async (
  userId: number,
  {
    title,
    amount,
    memo,
    type,
    registerDateTime,
    categoryId,
    isDisabledBudget,
    scheduledPaymentType,
    scheduledPaymentDay,
    installmentMonth,
  }: {
    title: string;
    amount: number;
    memo?: string | null;
    type: DbAccountBookCategoryType;
    registerDateTime: Date | string;
    categoryId: number;
    isDisabledBudget?: boolean | null;
    scheduledPaymentType?: DbScheduledPaymentType | null;
    scheduledPaymentDay?: number | null;
    installmentMonth?: number | null;
  },
) => {
  const accountBookCategory = await prismaWoolBank.accountBookCategory.findFirst({
    where: { userId, id: categoryId },
  });

  if (!accountBookCategory) {
    throw new ForbiddenError('해당 카테고리가 존재하지 않습니다.', 'not found account book category');
  }

  return prismaWoolBank.$transaction(async (tx) => {
    const isRegularExpenditure = !!scheduledPaymentType && !!scheduledPaymentDay;
    const installmentFields: { installmentMonth?: number; paidInstallmentMonth?: number; regularDate?: number } = {};

    if (isRegularExpenditure) {
      installmentFields.regularDate = scheduledPaymentDay;

      const regularExpenditureData = {
        title,
        amount,
        regularDate: scheduledPaymentDay,
        accountBookCategoryId: accountBookCategory.id,
        isAutoExpenditure: true,
        userId,
      };

      // 할부는 1회차 납부로 시작 (원본 로직)
      if (scheduledPaymentType === 'installment') {
        const paidInstallmentMonth = 1;
        const savedInstallmentMonth = installmentMonth ?? paidInstallmentMonth;

        installmentFields.installmentMonth = savedInstallmentMonth;
        installmentFields.paidInstallmentMonth = paidInstallmentMonth;

        await tx.regularExpenditure.create({
          data: { ...regularExpenditureData, installmentMonth: savedInstallmentMonth, paidInstallmentMonth },
        });
      } else {
        await tx.regularExpenditure.create({ data: regularExpenditureData });
      }
    }

    return tx.accountBook.create({
      include: {
        accountBookCategory: {
          include: {
            accountBookCategoryImage: true,
          },
        },
      },
      data: {
        title,
        memo: memo ?? '',
        amount,
        type,
        isRegularExpenditure: false,
        isDisabledBudget: isDisabledBudget ?? false,
        registerDateTime: new Date(registerDateTime),
        accountBookCategoryId: categoryId,
        userId,
        ...installmentFields,
      },
    });
  });
};

export const updateAccountBook = async (
  userId: number,
  {
    id,
    title,
    amount,
    memo,
    type,
    registerDateTime,
    categoryId,
    isDisabledBudget,
  }: {
    id: string;
    title?: string | null;
    amount?: number | null;
    memo?: string | null;
    type?: DbAccountBookCategoryType | null;
    registerDateTime?: Date | string | null;
    categoryId?: number | null;
    isDisabledBudget?: boolean | null;
  },
) => {
  const accountBookCategory = await prismaWoolBank.accountBookCategory.findFirst({
    where: { userId, id: Number(categoryId) },
  });

  if (!accountBookCategory) {
    throw new ForbiddenError('해당 카테고리가 존재하지 않습니다.', 'not found account book category');
  }

  const accountBook = await prismaWoolBank.accountBook.findFirst({ where: { id: Number(id), userId } });

  if (!accountBook) {
    throw new ForbiddenError('해당 가계부 내역이 존재하지 않습니다.', 'not found account book');
  }

  return prismaWoolBank.accountBook.update({
    include: {
      accountBookCategory: {
        include: {
          accountBookCategoryImage: true,
        },
      },
    },
    where: { id: accountBook.id },
    data: {
      title: title ?? accountBook.title,
      memo: memo ?? accountBook.memo,
      amount: amount ?? accountBook.amount,
      type: type ?? accountBook.type,
      isDisabledBudget: isDisabledBudget ?? accountBook.isDisabledBudget,
      registerDateTime: new Date(registerDateTime ?? accountBook.registerDateTime),
      accountBookCategoryId: Number(categoryId ?? accountBook.accountBookCategoryId),
    },
  });
};

// 원본 동작: 대상이 없거나 삭제 실패 시 예외 대신 false
export const deleteAccountBook = async (userId: number, id: number) => {
  try {
    const accountBook = await prismaWoolBank.accountBook.findFirst({ where: { id, userId } });

    if (!accountBook) {
      return false;
    }

    await prismaWoolBank.accountBook.delete({ where: { id: accountBook.id } });
    return true;
  } catch {
    return false;
  }
};
