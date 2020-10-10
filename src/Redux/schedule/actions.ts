import { ScheduleEvent } from "./types";

export const ADD_SCHEDULE_EVENT = `ADD_SCHEDULE_EVENT`;
export const makeActionAddScheduleEvent = (id: string, scheduleEvent: ScheduleEvent) => ({
  type: ADD_SCHEDULE_EVENT,
  payload: {
    id,
    scheduleEvent,
  },
});
export type ActionAddScheduleEvent = ReturnType<typeof makeActionAddScheduleEvent>;

export const BULK_ADD_SCHEDULE_EVENT = `BULK_ADD_SCHEDULE_EVENT`;
export const makeActionBulkAddScheduleEvent = (data: Record<string, ScheduleEvent>) => ({
  type: BULK_ADD_SCHEDULE_EVENT,
  payload: {
    data,
  },
});
export type ActionBulkAddScheduleEvent = ReturnType<
  typeof makeActionBulkAddScheduleEvent
>;

export type Actions = ActionAddScheduleEvent | ActionBulkAddScheduleEvent;
