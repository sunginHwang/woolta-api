import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { cancelShare } from '../../../../services/CalendarShareService';

// 대기 중 초대는 보낸 사람이 취소, 수락된 공유는 양쪽 누구나 해제
export const cancelCalendarShare: NonNullable<MutationResolvers['cancelCalendarShare']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireRealUser(_ctx);
  return cancelShare(userId, _arg.input.id);
};
