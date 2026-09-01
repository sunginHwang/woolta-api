import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { saveDeposit } from '../../../services/AccountService';

// 원본 POST /accounts/:id/deposit — depositDate 없으면 현재일시
export const createDeposit: NonNullable<MutationResolvers['createDeposit']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const { accountId, amount, depositDate } = _arg.input;

  return saveDeposit({
    userId,
    accountId,
    amount,
    depositDate: depositDate ? new Date(depositDate) : new Date(),
  });
};
