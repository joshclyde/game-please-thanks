import pickBy from "lodash/fp/pickBy";

import {
  Actions,
  ActionAddScheduleEvent,
  ActionBulkAddScheduleEvent,
  ActionDeleteScheduleEvent,
  ADD_SCHEDULE_EVENT,
  DELETE_SCHEDULE_EVENT,
  BULK_ADD_SCHEDULE_EVENT,
} from "./actions";
import { ScheduleState } from "./types";

const initialStartDateTime = new Date();
initialStartDateTime.setHours(0);
const initialEndDateTime = new Date();
initialEndDateTime.setHours(23);

const secondStartDateTime = new Date();
secondStartDateTime.setHours(0);
secondStartDateTime.setMonth(10);
const secondEndDateTime = new Date();
secondEndDateTime.setHours(23);
secondEndDateTime.setMonth(10);

const initialState: ScheduleState = {
  data: {},
};

const reduceAddScheduleEvent = (
  state: ScheduleState,
  { payload: { id, scheduleEvent } }: ActionAddScheduleEvent,
) => {
  return {
    ...state,
    data: {
      ...state.data,
      [id]: scheduleEvent,
    },
  };
};

const reduceDeleteScheduleEvent = (
  state: ScheduleState,
  { payload: { id } }: ActionDeleteScheduleEvent,
) => {
  return {
    ...state,
    data: pickBy((_value, scheduleEventId) => scheduleEventId !== id, state.data),
  };
};

const reduceBulkAddScheduleEvent = (
  state: ScheduleState,
  { payload: { data } }: ActionBulkAddScheduleEvent,
) => {
  return {
    ...state,
    data,
  };
};

export const schedule = (state = initialState, action: Actions): ScheduleState => {
  const { type } = action;
  switch (type) {
    case ADD_SCHEDULE_EVENT:
      return reduceAddScheduleEvent(state, action as ActionAddScheduleEvent);
    case DELETE_SCHEDULE_EVENT:
      return reduceDeleteScheduleEvent(state, action as ActionDeleteScheduleEvent);
    case BULK_ADD_SCHEDULE_EVENT:
      return reduceBulkAddScheduleEvent(state, action as ActionBulkAddScheduleEvent);
  }
  return state;
};
