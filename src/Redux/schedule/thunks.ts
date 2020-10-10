import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { addScheduleEvent, fetchUserDataSchedule } from "@Firebase";
import { ScheduleEvent } from "./types";
import { State } from "../types";
import {
  makeActionSetSharedLoadingInitiate,
  makeActionSetSharedLoadingSuccess,
  makeActionSetSharedLoadingFailure,
} from "../shared";
import { makeActionAddScheduleEvent, makeActionBulkAddScheduleEvent } from "./actions";

export const makeThunkAddScheduleEvent = (
  id: string,
  scheduleEvent: ScheduleEvent,
): ThunkAction<void, State, unknown, Action<string>> => async (dispatch, getState) => {
  dispatch(makeActionSetSharedLoadingInitiate(id));
  try {
    const { id: scheduleEventId } = await addScheduleEvent(scheduleEvent);
    dispatch(makeActionSetSharedLoadingSuccess(id));
    dispatch(makeActionAddScheduleEvent(scheduleEventId, scheduleEvent));
  } catch (error) {
    dispatch(makeActionSetSharedLoadingFailure(id));
  }
};

export const FETCH_USER_DATA_SCHEDULE_ID = `fetch-user-data-schedule`;
export const makeThunkFetchUserDataSchedule = (): ThunkAction<
  void,
  State,
  unknown,
  Action<string>
> => async (dispatch, getState) => {
  dispatch(makeActionSetSharedLoadingInitiate(FETCH_USER_DATA_SCHEDULE_ID));
  try {
    const data = await fetchUserDataSchedule();
    dispatch(makeActionSetSharedLoadingSuccess(FETCH_USER_DATA_SCHEDULE_ID));
    dispatch(makeActionBulkAddScheduleEvent(data));
  } catch (error) {
    dispatch(makeActionSetSharedLoadingFailure(FETCH_USER_DATA_SCHEDULE_ID));
  }
};
