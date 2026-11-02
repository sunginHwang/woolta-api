import type { MutationResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { markRead, parseNotificationId } from '../../../services/NotificationService';

// 공유코드 세션도 원 계정 알림함을 같이 보므로 읽음 처리를 허용한다.
export const markWoolBankNotificationRead: NonNullable<MutationResolvers['markWoolBankNotificationRead']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireAuth(_ctx);

  return markRead(userId, parseNotificationId(_arg.input.id));
};
