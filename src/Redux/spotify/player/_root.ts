import { useCallback } from "react";
import { combineReducers } from "redux";

import { initializeSpotifyPlayer } from "@Api";
import { makeLoadingFactory } from "@ReduxUtils";

import { RootState } from "../../types";
import { useSelectSpotifyAccessToken } from "../spotifyAccessToken/hooks";

import { reducers as playReducers } from "./play/reducers";

const useLoadFunction = () => {
  const accessToken = useSelectSpotifyAccessToken();
  return useCallback(async () => {
    await initializeSpotifyPlayer({ accessToken });
  }, [accessToken]);
};

const {
  reducer: loadReducer,
  useLoad: useLoadSpotifyPlayer,
  useSelectIsLoading: useSelectIsSpotifyPlayerLoading,
  useSelectDidLoadSucceed: useSelectDidSpotifyPlayerSucceed,
  useSelectDidLoadFail: useSelectDidSpotifyPlayerFail,
} = makeLoadingFactory({
  useLoadFunction,
  selectStateFromRoot: (state: RootState) => state.spotify.player.load,
  INITIATE_LOADING: `INITIATE_LOADING_SPOTIFY_PLAYER`,
  SUCCESS_LOADING: `SUCCESS_LOADING_SPOTIFY_PLAYER  `,
  FAILURE_LOADING: `FAILURE_LOADING_SPOTIFY_PLAYER`,
});

const player = combineReducers({
  load: loadReducer,
  ...playReducers,
});

export const reducers = { player };
export {
  useLoadSpotifyPlayer,
  useSelectIsSpotifyPlayerLoading,
  useSelectDidSpotifyPlayerSucceed,
  useSelectDidSpotifyPlayerFail,
};
