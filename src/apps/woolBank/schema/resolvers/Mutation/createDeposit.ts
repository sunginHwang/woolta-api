import type { MutationResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { saveDeposit } from '../../../services/AccountService';

// 원본 POST /accounts/:id/deposit — depositDate 없으면 현재일시
export const createDeposit: NonNullable<MutationResolvers['createDeposit']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireAuth(_ctx);

  return saveDeposit({
    userId,
    accountId: _arg.accountId,
    amount: _arg.amount,
    depositDate: _arg.depositDate ? new Date(_arg.depositDate) : new Date(),
  });
};
