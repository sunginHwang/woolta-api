import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { createEvent } from '../../../../services/CalendarEventService';

export const createCalendarEvent: NonNullable<MutationResolvers['createCalendarEvent']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireRealUser(_ctx);
  return createEvent(userId, _arg.input);
};
