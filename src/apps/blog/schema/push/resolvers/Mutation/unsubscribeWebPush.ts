import type { MutationResolvers } from './../../../../generates/types.generated';
import { removePushSubscription } from '../../../../services/WebPushService';

export const unsubscribeWebPush: NonNullable<MutationResolvers['unsubscribeWebPush']> = async (_parent, _arg) => {
  await removePushSubscription(_arg.key);

  return true;
};
