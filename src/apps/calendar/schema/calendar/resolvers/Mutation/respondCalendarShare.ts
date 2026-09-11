import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { respondShare } from '../../../../services/CalendarShareService';

// 수락/거절 권한은 초대를 받은 사람에게만 있다 (서비스에서 검사)
export const respondCalendarShare: NonNullable<MutationResolvers['respondCalendarShare']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireRealUser(_ctx);
  return respondShare(userId, _arg.input.id, _arg.input.isAccepted);
};
