import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { initializeYoutubePlayer } from "@Api";

import { makeThunkLoading } from "../shared";
import { State } from "../types";

const INITIALIZE_YOUTUBE_PLAYER = `INITIALIZE_YOUTUBE_PLAYER`;
export const makeThunkCreateYoutubePlayer = (): ThunkAction<
  void,
  State,
  unknown,
  Action<string>
> => async (dispatch) => {
  dispatch(
    makeThunkLoading({
      id: INITIALIZE_YOUTUBE_PLAYER,
      functionToExecute: initializeYoutubePlayer,
    }),
  );
};
