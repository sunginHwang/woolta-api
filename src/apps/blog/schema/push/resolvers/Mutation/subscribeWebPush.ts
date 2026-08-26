import type { MutationResolvers } from './../../../../generates/types.generated';
import { addPushSubscription } from '../../../../services/WebPushService';

export const subscribeWebPush: NonNullable<MutationResolvers['subscribeWebPush']> = async (_parent, _arg) => {
  const { key, auth, endPoint } = _arg.input;
  await addPushSubscription({ key, auth, endPoint });

  return true;
};
