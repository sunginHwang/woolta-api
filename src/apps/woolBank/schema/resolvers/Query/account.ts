import type { QueryResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { getAccountByIdAndUserId } from '../../../services/AccountService';

// 원본 GET /accounts/:accountId — deposits(depositDate desc) + savingType 포함
export const account: NonNullable<QueryResolvers['account']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireAuth(_ctx);

  return getAccountByIdAndUserId(Number(_arg.id), userId);
};
