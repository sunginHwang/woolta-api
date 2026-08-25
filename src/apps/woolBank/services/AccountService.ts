import { GraphQLError } from 'graphql/error';
import { getLastMonth } from '../utils/date';
import { prismaWoolBank } from '../utils/prismaClient';

// 원본 accountService.getNotExpirationAccounts
export const getNotExpirationAccounts = async (userId: number, limit: number = 3) => {
  return prismaWoolBank.account.findMany({
    where: { userId, isExpiration: false },
    orderBy: { id: 'desc' },
    take: limit,
    include: { savingType: true, deposits: true },
  });
};

type AccountWithDeposits = { deposits: { amount: number; depositDate: Date }[] };

// 원본 accountService.getSavedAmount + getLastMonthAmount
export const getSavedAmount = async (userId: number) => {
  const accounts = await getNotExpirationAccounts(userId, 100);

  const totalSavedAmount = accounts
    .map((account) => account.deposits)
    .reduce((acc, depositList) => acc + depositList.reduce((sum, deposit) => sum + deposit.amount, 0), 0);

  const totalSavedAmountExceptCurrentMonth = totalSavedAmount === 0 ? 0 : getLastMonthAmount(accounts);

  return { totalSavedAmount, totalSavedAmountExceptCurrentMonth };
};

// 이번달 제외 총 입금액 계산 (원본 getLastMonthAmount)
export const getLastMonthAmount = (accounts: AccountWithDeposits[]) => {
  const lastMonthTime = getLastMonth().getTime();

  return accounts
    .map((account) => account.deposits)
    .reduce((acc, depositList) => {
      return (
        acc +
        depositList
          .filter((deposit) => lastMonthTime > deposit.depositDate.getTime())
          .reduce((sum, deposit) => sum + deposit.amount, 0)
      );
    }, 0);
};

// 원본 getAccountByIdAndUserId: deposits는 depositDate desc 정렬
export const getAccountByIdAndUserId = async (id: number, userId: number) => {
  return prismaWoolBank.account.findFirst({
    where: { id, userId },
    include: {
      savingType: true,
      deposits: { orderBy: { depositDate: 'desc' } },
    },
  });
};

export const getAccountByIdAndUserIdOrThrow = async (id: number, userId: number) => {
  const account = await getAccountByIdAndUserId(id, userId);

  if (!account) {
    throw new GraphQLError(`accountId:${id} is not found`, { extensions: { code: 'NOT_FOUND' } });
  }

  return account;
};

// 원본 depositService.saveDeposit: 만기 검증 + prevTotalAmount 기록 + currentAmount 증가 트랜잭션
export const saveDeposit = async ({
  accountId,
  userId,
  amount,
  depositDate,
}: {
  accountId: number;
  userId: number;
  amount: number;
  depositDate: Date;
}) => {
  const account = await prismaWoolBank.account.findUnique({ where: { id: accountId } });

  if (!account) {
    throw new GraphQLError(`accountId:${accountId} is not found`, { extensions: { code: 'NOT_FOUND' } });
  }

  if (account.isExpiration) {
    throw new GraphQLError('만기된 상품은 입금이 불가능 합니다.', { extensions: { code: 'BAD_REQUEST' } });
  }

  return prismaWoolBank.$transaction(async (tx) => {
    const savedDeposit = await tx.deposit.create({
      data: {
        accountId: account.id,
        amount,
        depositDate,
        prevTotalAmount: account.currentAmount,
        userId,
      },
      include: { account: { include: { savingType: true } } },
    });

    await tx.account.update({
      where: { id: account.id },
      data: { currentAmount: account.currentAmount + amount },
    });

    return savedDeposit;
  });
};
