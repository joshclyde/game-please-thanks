export const SET_SHARED_LOADING_INITIATE = `SET_SHARED_LOADING_INITIATE`;
export const makeActionSetSharedLoadingInitiate = (key: string) => ({
  type: SET_SHARED_LOADING_INITIATE,
  payload: {
    key,
  },
});
export type ActionSetSharedLoadingInitiate = ReturnType<
  typeof makeActionSetSharedLoadingInitiate
>;

export const SET_SHARED_LOADING_SUCCESS = `SET_SHARED_LOADING_SUCCESS`;
export const makeActionSetSharedLoadingSuccess = (key: string) => ({
  type: SET_SHARED_LOADING_SUCCESS,
  payload: {
    key,
  },
});
export type ActionSetSharedLoadingSuccess = ReturnType<
  typeof makeActionSetSharedLoadingSuccess
>;

export const SET_SHARED_LOADING_FAILURE = `SET_SHARED_LOADING_FAILURE`;
export const makeActionSetSharedLoadingFailure = (key: string) => ({
  type: SET_SHARED_LOADING_FAILURE,
  payload: {
    key,
  },
});
export type ActionSetSharedLoadingFailure = ReturnType<
  typeof makeActionSetSharedLoadingFailure
>;

export type Actions =
  | ActionSetSharedLoadingInitiate
  | ActionSetSharedLoadingSuccess
  | ActionSetSharedLoadingFailure;
