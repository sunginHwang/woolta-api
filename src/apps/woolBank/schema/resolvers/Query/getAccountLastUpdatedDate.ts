import type { QueryResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { getAccountLastUpdatedDate as getAccountLastUpdatedDateService } from '../../../services/AccountService';

export const getAccountLastUpdatedDate: NonNullable<QueryResolvers['getAccountLastUpdatedDate']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireAuth(_ctx);

  return getAccountLastUpdatedDateService(userId);
};
