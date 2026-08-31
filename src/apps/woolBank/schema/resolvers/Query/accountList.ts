import type { QueryResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { getAccountList } from '../../../services/AccountService';

export const accountList: NonNullable<QueryResolvers['accountList']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireAuth(_ctx);

  return getAccountList(userId, _arg.limitCount ?? 100);
};
