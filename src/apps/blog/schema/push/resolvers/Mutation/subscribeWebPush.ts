import type { MutationResolvers } from './../../../../generates/types.generated';
import { addPushSubscription } from '../../../../services/WebPushService';

export const subscribeWebPush: NonNullable<MutationResolvers['subscribeWebPush']> = async (_parent, _arg) => {
  await addPushSubscription({ key: _arg.key, auth: _arg.auth, endPoint: _arg.endPoint });

  return true;
};
