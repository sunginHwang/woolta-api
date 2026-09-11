import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { updateEvent } from '../../../../services/CalendarEventService';

// 소유자만 수정 가능 — 공유는 읽기 전용 (서비스에서 검사)
export const updateCalendarEvent: NonNullable<MutationResolvers['updateCalendarEvent']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireRealUser(_ctx);
  return updateEvent(userId, _arg.input);
};
