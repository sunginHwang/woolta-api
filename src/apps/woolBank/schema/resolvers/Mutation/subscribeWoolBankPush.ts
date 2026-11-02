import type { MutationResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { upsertSubscription } from '../../../services/PushService';

export const subscribeWoolBankPush: NonNullable<MutationResolvers['subscribeWoolBankPush']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireAuth(_ctx);
  const { endpoint, p256dh, auth, expirationTime, userAgent } = _arg.input;

  return upsertSubscription(userId, { endpoint, p256dh, auth, expirationTime, userAgent });
};
