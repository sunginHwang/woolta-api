import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { deleteEvent } from '../../../../services/CalendarEventService';

export const deleteCalendarEvent: NonNullable<MutationResolvers['deleteCalendarEvent']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireRealUser(_ctx);
  return deleteEvent(userId, _arg.input.id);
};
