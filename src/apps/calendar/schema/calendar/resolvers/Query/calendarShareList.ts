import type { QueryResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { getShareList } from '../../../../services/CalendarShareService';

// 공유 현황 — 수락된 관계 + 내가 보낸 대기 중 초대
export const calendarShareList: NonNullable<QueryResolvers['calendarShareList']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  return getShareList(userId);
};
