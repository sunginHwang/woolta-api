import type { QueryResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { getPendingShareList } from '../../../../services/CalendarShareService';

// 내가 받은 대기 중 초대 — 로그인 직후 알림 배지가 이걸 본다
export const pendingCalendarShareList: NonNullable<QueryResolvers['pendingCalendarShareList']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireRealUser(_ctx);
  return getPendingShareList(userId);
};
