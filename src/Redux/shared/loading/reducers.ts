import {
  Actions,
  ActionSetSharedLoadingInitiate,
  ActionSetSharedLoadingSuccess,
  ActionSetSharedLoadingFailure,
  SET_SHARED_LOADING_INITIATE,
  SET_SHARED_LOADING_SUCCESS,
  SET_SHARED_LOADING_FAILURE,
} from "./actions";
import { SharedLoadingState } from "./types";

const initialState: SharedLoadingState = {};

const reduceSetSharedLoadingInitiate = (
  state: SharedLoadingState,
  { payload }: ActionSetSharedLoadingInitiate,
): SharedLoadingState => {
  const { key } = payload;
  return {
    ...state,
    [key]: {
      isLoading: true,
      isLoadSuccessful: false,
      isLoadFailure: false,
    },
  };
};

const reduceSetSharedLoadingSuccess = (
  state: SharedLoadingState,
  { payload }: ActionSetSharedLoadingSuccess,
): SharedLoadingState => {
  const { key } = payload;
  return {
    ...state,
    [key]: {
      isLoading: false,
      isLoadSuccessful: true,
      isLoadFailure: false,
    },
  };
};

const reduceSetSharedLoadingFailure = (
  state: SharedLoadingState,
  { payload }: ActionSetSharedLoadingFailure,
): SharedLoadingState => {
  const { key } = payload;
  return {
    ...state,
    [key]: {
      isLoading: false,
      isLoadSuccessful: false,
      isLoadFailure: true,
    },
  };
};

export const loading = (state = initialState, action: Actions): SharedLoadingState => {
  const { type } = action;
  switch (type) {
    case SET_SHARED_LOADING_INITIATE:
      return reduceSetSharedLoadingInitiate(
        state,
        action as ActionSetSharedLoadingInitiate,
      );
    case SET_SHARED_LOADING_SUCCESS:
      return reduceSetSharedLoadingSuccess(
        state,
        action as ActionSetSharedLoadingSuccess,
      );
    case SET_SHARED_LOADING_FAILURE:
      return reduceSetSharedLoadingFailure(
        state,
        action as ActionSetSharedLoadingFailure,
      );
  }
  return state;
};
