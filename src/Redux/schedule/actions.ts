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

export type Actions = ActionAddScheduleEvent;
