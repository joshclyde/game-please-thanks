import { pickBy } from "lodash/fp";
import {
  selectSharedIsLoading,
  selectSharedIsLoadSuccessful,
  selectSharedIsLoadFailure,
} from "../shared";
import { State } from "../types";
import { FETCH_USER_DATA_SCHEDULE_ID } from "./thunks";

// TODO: look into ReadOnly typescript for selectors?

export type StateJustSchedule = Pick<State, "schedule">;

export const selectScheduleData = (state: StateJustSchedule) => state.schedule.data;

export const selectScheduleDataIds = (state: StateJustSchedule) =>
  Object.keys(state.schedule.data);

export const selectScheduleDataEvent = (
  state: StateJustSchedule,
  scheduleEventId: string,
) => state.schedule.data[scheduleEventId];

export const selectEventsForDate = (state: StateJustSchedule, date: Date) => {
  return pickBy((scheduleEvent) => {
    console.log(scheduleEvent.startDatetime.getTime());
    console.log(date.getTime());
    console.log(scheduleEvent.endDatetime.getTime());
    return (
      scheduleEvent.startDatetime.getTime() <= date.getTime() &&
      scheduleEvent.endDatetime.getTime() > date.getTime()
    );
  }, state.schedule.data);
};
// Object.entries(state.schedule.data).filter(
//   ([id, scheduleEvent]) =>
//     scheduleEvent.startDatetime.getTime() <= date.getTime() &&
//     scheduleEvent.endDatetime.getTime() > date.getTime(),
// ).reduce(([id, scheduleEvent]) => );

export const selectScheduleDataIsLoading = (state: State) =>
  selectSharedIsLoadSuccessful(state, FETCH_USER_DATA_SCHEDULE_ID);

export const selectScheduleDataIsLoadSuccessful = (state: State) =>
  selectSharedIsLoadSuccessful(state, FETCH_USER_DATA_SCHEDULE_ID);

export const selectScheduleDataIsLoadFailure = (state: State) =>
  selectSharedIsLoadFailure(state, FETCH_USER_DATA_SCHEDULE_ID);

export const selectScheduleDateIsLoadAttempted = (state: State) =>
  selectScheduleDataIsLoading(state) ||
  selectScheduleDataIsLoadSuccessful(state) ||
  selectScheduleDataIsLoadFailure(state);
