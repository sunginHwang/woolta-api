import { GraphQLError } from 'graphql/error';
import type { MutationResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { getAccountByIdAndUserIdOrThrow, saveDeposit } from '../../../services/AccountService';
import { prismaWoolBank } from '../../../utils/prismaClient';

// 원본 POST /accounts/ — savingType 검증 + 정기예금(savingTypeId 3)이면 첫 입금 자동 처리
export const createAccount: NonNullable<MutationResolvers['createAccount']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireAuth(_ctx);
  const { title, taxType, regularTransferDate, rate, startDate, endDate, amount, savingTypeId } = _arg.input;

  const savingType = await prismaWoolBank.savingType.findUnique({ where: { id: savingTypeId } });

  if (!savingType) {
    throw new GraphQLError('can`t find savingType', { extensions: { code: 'BAD_REQUEST' } });
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
