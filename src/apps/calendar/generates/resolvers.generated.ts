/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { calendarEventList as Query_calendarEventList } from './../schema/calendar/resolvers/Query/calendarEventList';
import    { calendarShareList as Query_calendarShareList } from './../schema/calendar/resolvers/Query/calendarShareList';
import    { pendingCalendarShareList as Query_pendingCalendarShareList } from './../schema/calendar/resolvers/Query/pendingCalendarShareList';
import    { cancelCalendarShare as Mutation_cancelCalendarShare } from './../schema/calendar/resolvers/Mutation/cancelCalendarShare';
import    { createCalendarEvent as Mutation_createCalendarEvent } from './../schema/calendar/resolvers/Mutation/createCalendarEvent';
import    { deleteCalendarEvent as Mutation_deleteCalendarEvent } from './../schema/calendar/resolvers/Mutation/deleteCalendarEvent';
import    { requestCalendarShare as Mutation_requestCalendarShare } from './../schema/calendar/resolvers/Mutation/requestCalendarShare';
import    { respondCalendarShare as Mutation_respondCalendarShare } from './../schema/calendar/resolvers/Mutation/respondCalendarShare';
import    { updateCalendarEvent as Mutation_updateCalendarEvent } from './../schema/calendar/resolvers/Mutation/updateCalendarEvent';
import    { CalendarEvent } from './../schema/calendar/resolvers/CalendarEvent';
import    { CalendarEventList } from './../schema/calendar/resolvers/CalendarEventList';
import    { CalendarShare } from './../schema/calendar/resolvers/CalendarShare';
import    { CalendarShareList } from './../schema/calendar/resolvers/CalendarShareList';
import    { CalendarUser } from './../schema/calendar/resolvers/CalendarUser';
import    { RequestCalendarShareResult } from './../schema/calendar/resolvers/RequestCalendarShareResult';
import    { DateTimeResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { calendarEventList: Query_calendarEventList,calendarShareList: Query_calendarShareList,pendingCalendarShareList: Query_pendingCalendarShareList },
      Mutation: { cancelCalendarShare: Mutation_cancelCalendarShare,createCalendarEvent: Mutation_createCalendarEvent,deleteCalendarEvent: Mutation_deleteCalendarEvent,requestCalendarShare: Mutation_requestCalendarShare,respondCalendarShare: Mutation_respondCalendarShare,updateCalendarEvent: Mutation_updateCalendarEvent },
      
      CalendarEvent: CalendarEvent,
CalendarEventList: CalendarEventList,
CalendarShare: CalendarShare,
CalendarShareList: CalendarShareList,
CalendarUser: CalendarUser,
RequestCalendarShareResult: RequestCalendarShareResult,
DateTime: DateTimeResolver
    }