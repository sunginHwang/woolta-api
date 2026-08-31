import { NotFoundError, ValidationError } from '../../../shared/errors';
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
    throw new NotFoundError(`accountId:${id} is not found`);
  }

  return account;
};

// 원본 GET /accounts/ (getAccountsByUserId)
export const getAccountList = async (userId: number, limitCount: number = 100) => {
  const [itemList, totalCount] = await Promise.all([
    prismaWoolBank.account.findMany({
      where: { userId },
      orderBy: { id: 'desc' },
      take: limitCount,
      include: { savingType: true, deposits: true },
    }),
    prismaWoolBank.account.count({ where: { userId } }),
  ]);

  return { totalCount, itemList };
};

// 원본 GET /accounts/last-update-date — 없으면 현재일시(캐시 무효화 목적)
export const getAccountLastUpdatedDate = async (userId: number) => {
  const account = await prismaWoolBank.account.findFirst({
    where: { userId },
    orderBy: { updatedAt: 'desc' },
  });

  return account?.updatedAt ?? new Date();
};

// 원본 POST /accounts/ — savingType 검증 + 정기예금(savingTypeId 3)이면 첫 입금 자동 처리
export const createAccount = async (
  userId: number,
  {
    title,
    taxType,
    regularTransferDate,
    rate,
    startDate,
    endDate,
    amount,
    savingTypeId,
  }: {
    title: string;
    taxType: string;
    regularTransferDate: number;
    rate: number;
    startDate: Date | string;
    endDate: Date | string;
    amount: number;
    savingTypeId: number;
  },
) => {
  const savingType = await prismaWoolBank.savingType.findUnique({ where: { id: savingTypeId } });

  if (!savingType) {
    throw new ValidationError('can`t find savingType');
  }

  const savedAccount = await prismaWoolBank.account.create({
    data: {
      title,
      taxType,
      regularTransferDate,
      rate,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      amount,
      savingTypeId,
      userId,
      currentAmount: 0,
      isExpiration: false, // 시작부터 만기일수 없음 (원본 주석)
    },
  });

  if (savingTypeId === 3) {
    await saveDeposit({
      userId,
      depositDate: new Date(startDate),
      amount: savedAccount.amount,
      accountId: savedAccount.id,
    });
  }

  return getAccountByIdAndUserIdOrThrow(savedAccount.id, userId);
};

// 원본 DELETE /accounts/:id — 입금 내역 동반 삭제 트랜잭션, 실패 시 false (원본 동작)
export const deleteAccount = async (userId: number, id: number) => {
  const account = await getAccountByIdAndUserIdOrThrow(id, userId);

  try {
    await prismaWoolBank.$transaction([
      prismaWoolBank.deposit.deleteMany({ where: { accountId: account.id } }),
      prismaWoolBank.account.delete({ where: { id: account.id } }),
    ]);
    return true;
  } catch {
    return false;
  }
};

// 원본 PUT /accounts/:id/expiration
export const completeAccountExpiration = async (userId: number, id: number) => {
  const account = await getAccountByIdAndUserIdOrThrow(id, userId);

  await prismaWoolBank.account.update({
    where: { id: account.id },
    data: { isExpiration: true },
  });

  return true;
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
    throw new NotFoundError(`accountId:${accountId} is not found`);
  }

  if (account.isExpiration) {
    throw new ValidationError('만기된 상품은 입금이 불가능 합니다.');
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
      include: { account: { include: { savingType: true, deposits: true } } },
    });

    await tx.account.update({
      where: { id: account.id },
      data: { currentAmount: account.currentAmount + amount },
    });

    return savedDeposit;
  });
};
