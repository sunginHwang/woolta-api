import type { QueryResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { getPushStatus } from '../../../services/PushService';

export const getWoolBankPushStatus: NonNullable<QueryResolvers['getWoolBankPushStatus']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireAuth(_ctx);

  return getPushStatus(userId, _arg.endpoint);
};
