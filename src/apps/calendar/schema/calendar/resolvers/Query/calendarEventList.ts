import type { QueryResolvers } from './../../../../generates/types.generated';
import { requireAuth } from '../../../../../../shared/auth';
import { getEventList } from '../../../../services/CalendarEventService';

// 내 일정 + 공유 수락된 상대의 일정. 읽기 전용이라 share 로그인도 허용한다.
export const calendarEventList: NonNullable<QueryResolvers['calendarEventList']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireAuth(_ctx);
  return getEventList(userId, _arg.input);
};
