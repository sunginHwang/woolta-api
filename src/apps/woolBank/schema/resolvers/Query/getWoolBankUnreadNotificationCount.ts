import type { QueryResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { countUnread } from '../../../services/NotificationService';

export const getWoolBankUnreadNotificationCount: NonNullable<
  QueryResolvers['getWoolBankUnreadNotificationCount']
> = async (_parent, _arg, _ctx) => {
  const { userId } = requireAuth(_ctx);

  return countUnread(userId);
};
