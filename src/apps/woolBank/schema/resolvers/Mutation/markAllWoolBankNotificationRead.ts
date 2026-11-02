import type { MutationResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { markAllRead } from '../../../services/NotificationService';

export const markAllWoolBankNotificationRead: NonNullable<
  MutationResolvers['markAllWoolBankNotificationRead']
> = async (_parent, _arg, _ctx) => {
  const { userId } = requireAuth(_ctx);

  return markAllRead(userId);
};
