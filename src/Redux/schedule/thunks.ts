import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { addScheduleEvent, fetchUserDataSchedule, deleteScheduleEvent } from "@Firebase";

import {
  makeActionSetSharedLoadingInitiate,
  makeActionSetSharedLoadingSuccess,
  makeActionSetSharedLoadingFailure,
} from "../shared";
import { RootState } from "../types";

import {
  makeActionAddScheduleEvent,
  makeActionBulkAddScheduleEvent,
  makeActionDeleteScheduleEvent,
} from "./actions";
import { ScheduleEvent } from "./types";

export const makeThunkAddScheduleEvent = (
  id: string,
  scheduleEvent: ScheduleEvent,
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
  getState,
) => {
  dispatch(makeActionSetSharedLoadingInitiate(id));
  try {
    const { id: scheduleEventId } = await addScheduleEvent(scheduleEvent);
    dispatch(makeActionSetSharedLoadingSuccess(id));
    dispatch(makeActionAddScheduleEvent(scheduleEventId, scheduleEvent));
  } catch (error) {
    dispatch(makeActionSetSharedLoadingFailure(id, error));
  }
};

export const makeThunkDeleteScheduleEvent = (
  scheduleEventId: string,
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
  getState,
) => {
  dispatch(makeActionSetSharedLoadingInitiate(scheduleEventId));
  try {
    await deleteScheduleEvent(scheduleEventId);
    dispatch(makeActionSetSharedLoadingSuccess(scheduleEventId));
    dispatch(makeActionDeleteScheduleEvent(scheduleEventId));
  } catch (error) {
    dispatch(makeActionSetSharedLoadingFailure(scheduleEventId, error));
  }
};

export const FETCH_USER_DATA_SCHEDULE_ID = `fetch-user-data-schedule`;
export const makeThunkFetchUserDataSchedule = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch, getState) => {
  dispatch(makeActionSetSharedLoadingInitiate(FETCH_USER_DATA_SCHEDULE_ID));
  try {
    const data = await fetchUserDataSchedule();
    dispatch(makeActionSetSharedLoadingSuccess(FETCH_USER_DATA_SCHEDULE_ID));
    dispatch(makeActionBulkAddScheduleEvent(data));
  } catch (error) {
    dispatch(makeActionSetSharedLoadingFailure(FETCH_USER_DATA_SCHEDULE_ID, error));
  }
};
