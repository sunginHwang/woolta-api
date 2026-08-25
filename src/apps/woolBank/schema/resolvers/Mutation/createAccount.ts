import { GraphQLError } from 'graphql/error';
import type { MutationResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { saveDeposit } from '../../../services/AccountService';
import { prismaWoolBank } from '../../../utils/prismaClient';

// 원본 POST /accounts/ — savingType 검증 + 정기예금(savingTypeId 3)이면 첫 입금 자동 처리
export const createAccount: NonNullable<MutationResolvers['createAccount']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireAuth(_ctx);

  const savingType = await prismaWoolBank.savingType.findUnique({ where: { id: _arg.savingTypeId } });

  if (!savingType) {
    throw new GraphQLError('can`t find savingType', { extensions: { code: 'BAD_REQUEST' } });
  }

  const savedAccount = await prismaWoolBank.account.create({
    data: {
      title: _arg.title,
      taxType: _arg.taxType,
      regularTransferDate: _arg.regularTransferDate,
      rate: _arg.rate,
      startDate: new Date(_arg.startDate),
      endDate: new Date(_arg.endDate),
      amount: _arg.amount,
      savingTypeId: _arg.savingTypeId,
      userId,
      currentAmount: 0,
      isExpiration: false, // 시작부터 만기일수 없음 (원본 주석)
    },
  });

  if (_arg.savingTypeId === 3) {
    await saveDeposit({
      userId,
      depositDate: new Date(_arg.startDate),
      amount: savedAccount.amount,
      accountId: savedAccount.id,
    });
  }

  return savedAccount.id;
};
