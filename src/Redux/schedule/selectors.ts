import pickBy from "lodash/fp/pickBy";

import {
  selectSharedIsLoading,
  selectSharedIsLoadSuccessful,
  selectSharedIsLoadFailure,
} from "../shared";
import { RootState } from "../types";

import { FETCH_USER_DATA_SCHEDULE_ID } from "./thunks";

// TODO: look into ReadOnly typescript for selectors?

export type StateJustSchedule = Pick<RootState, "schedule">;

export const selectScheduleData = (state: StateJustSchedule) => state.schedule.data;

export const selectScheduleDataIds = (state: StateJustSchedule) =>
  Object.keys(state.schedule.data);

export const selectScheduleDataEvent = (
  state: StateJustSchedule,
  scheduleEventId: string,
) => state.schedule.data[scheduleEventId];

export const selectCurrentEventsForDate = (state: StateJustSchedule, date: Date) => {
  return pickBy((scheduleEvent) => {
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

export const selectScheduleDataIsLoading = (state: RootState) =>
  selectSharedIsLoadSuccessful(state, FETCH_USER_DATA_SCHEDULE_ID);

export const selectScheduleDataIsLoadSuccessful = (state: RootState) =>
  selectSharedIsLoadSuccessful(state, FETCH_USER_DATA_SCHEDULE_ID);

export const selectScheduleDataIsLoadFailure = (state: RootState) =>
  selectSharedIsLoadFailure(state, FETCH_USER_DATA_SCHEDULE_ID);

export const selectScheduleDateIsLoadAttempted = (state: RootState) =>
  selectScheduleDataIsLoading(state) ||
  selectScheduleDataIsLoadSuccessful(state) ||
  selectScheduleDataIsLoadFailure(state);
