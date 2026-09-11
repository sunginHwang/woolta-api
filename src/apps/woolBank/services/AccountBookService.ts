import { endOfDay, endOfMonth, startOfDay, startOfMonth } from 'date-fns';
import * as _ from 'lodash';
import { ForbiddenError, ValidationError } from '../../../shared/errors';
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

/** 한 번에 등록할 수 있는 최대 건수 — 카드 내역서 두어 달치를 덮는 선 */
const MAX_BULK_ITEMS = 500;

/**
 * 카드 내역서 벌크 등록.
 *
 * 전부 성공하거나 전부 실패한다(단일 트랜잭션) — 수십 건 중 일부만 들어가면
 * 사용자가 무엇이 빠졌는지 확인할 방법이 없고, 다시 올리면 중복이 된다.
 *
 * 카테고리는 건마다 조회하지 않고 한 번에 모아 검증한다(N+1 방지).
 */
export const createAccountBookList = async (
  userId: number,
  itemList: {
    title: string;
    amount: number;
    memo?: string | null;
    type: DbAccountBookCategoryType;
    registerDateTime: Date | string;
    categoryId: number;
    isDisabledBudget?: boolean | null;
  }[],
) => {
  if (itemList.length === 0) {
    throw new ValidationError('등록할 내역이 없습니다.');
  }
  if (itemList.length > MAX_BULK_ITEMS) {
    throw new ValidationError(`한 번에 ${MAX_BULK_ITEMS}건까지 등록할 수 있습니다.`);
  }

  const categoryIds = [...new Set(itemList.map((item) => item.categoryId))];
  const categories = await prismaWoolBank.accountBookCategory.findMany({
    where: { userId, id: { in: categoryIds } },
    select: { id: true },
  });

  const ownedIds = new Set(categories.map((category) => category.id));
  const missing = categoryIds.filter((id) => !ownedIds.has(id));

  if (missing.length > 0) {
    throw new ForbiddenError(
      '해당 카테고리가 존재하지 않습니다.',
      `not found account book category: ${missing.join(', ')}`,
    );
  }

  /**
   * 건마다 create 를 돌면 왕복이 건수만큼 생겨 원격 DB 에서는 기본 5초 트랜잭션 타임아웃을
   * 수십 건만으로도 넘긴다. 삽입은 createMany 한 번으로 끝내고,
   * 반환할 행은 삽입 직전 id 를 기준으로 한 번에 되읽는다(왕복 3회 고정).
   */
  return prismaWoolBank.$transaction(async (tx) => {
    const { _max } = await tx.accountBook.aggregate({ _max: { id: true }, where: { userId } });
    // 이 시점 이후에 생긴 내 행 = 이번에 넣은 행. 트랜잭션 스냅샷 안이라 남의 커밋은 끼어들지 않는다.
    const lastIdBefore = _max.id ?? 0;

    await tx.accountBook.createMany({
      data: itemList.map((item) => ({
        title: item.title,
        memo: item.memo ?? '',
        amount: item.amount,
        type: item.type,
        isRegularExpenditure: false,
        isDisabledBudget: item.isDisabledBudget ?? false,
        registerDateTime: item.registerDateTime,
        accountBookCategoryId: item.categoryId,
        userId,
      })),
    });

    // createMany 는 삽입 순서대로 id 를 매기므로 id 오름차순이 곧 요청 순서다
    return tx.accountBook.findMany({
      where: { userId, id: { gt: lastIdBefore } },
      include: { accountBookCategory: { include: { accountBookCategoryImage: true } } },
      orderBy: { id: 'asc' },
    });
  });
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
