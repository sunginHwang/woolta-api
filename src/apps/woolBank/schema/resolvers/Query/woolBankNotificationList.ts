import type { QueryResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { listNotifications } from '../../../services/NotificationService';

export const woolBankNotificationList: NonNullable<QueryResolvers['woolBankNotificationList']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireAuth(_ctx);

  return listNotifications(userId, _arg.limitCount == null ? undefined : Number(_arg.limitCount));
};
