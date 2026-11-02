import type { QueryResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { getNotification, parseNotificationId } from '../../../services/NotificationService';

export const woolBankNotification: NonNullable<QueryResolvers['woolBankNotification']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireAuth(_ctx);

  return getNotification(userId, parseNotificationId(_arg.id));
};
