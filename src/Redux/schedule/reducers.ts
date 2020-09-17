import { Actions, ActionAddScheduleEvent, ADD_SCHEDULE_EVENT } from "./actions";
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
  data: {
    "1": {
      title: `Working (example)`,
      description: `Doing some work.`,
      startDatetime: initialStartDateTime,
      endDatetime: initialEndDateTime,
    },
    "2": {
      title: `Free time`,
      description: `Absolutely nothing.`,
      startDatetime: secondStartDateTime,
      endDatetime: secondEndDateTime,
    },
  },
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

export const schedule = (state = initialState, action: Actions): ScheduleState => {
  const { type } = action;
  switch (type) {
    case ADD_SCHEDULE_EVENT:
      return reduceAddScheduleEvent(state, action as ActionAddScheduleEvent);
  }
  return state;
};
