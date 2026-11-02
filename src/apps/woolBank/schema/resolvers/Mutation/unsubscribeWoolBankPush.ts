import type { MutationResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { removeSubscription } from '../../../services/PushService';

export const unsubscribeWoolBankPush: NonNullable<MutationResolvers['unsubscribeWoolBankPush']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireAuth(_ctx);

  return removeSubscription(userId, _arg.input.endpoint);
};
