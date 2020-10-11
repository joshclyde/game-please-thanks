import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { startFirebaseEventListening, getIsUserSignedIn } from "@Firebase";
import { State } from "../types";
import { makeActionSetIsAuthenticated } from "./actions";

// TODO: is this weird?
let isListening = false;
export const makeThunkStartListenerForAuth = (): ThunkAction<
  void,
  State,
  unknown,
  Action<string>
> => async (dispatch, getState) => {
  if (!isListening) {
    isListening = true;
    dispatch(makeActionSetIsAuthenticated(getIsUserSignedIn()));
    startFirebaseEventListening(
      () => {
        dispatch(makeActionSetIsAuthenticated(true));
      },
      () => {
        dispatch(makeActionSetIsAuthenticated(false));
      },
    );
  }
};
