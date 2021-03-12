import { useCallback } from "react";
import { combineReducers } from "redux";

import { spotifyPlayerPlay } from "@Api";
import { makeLoadingFactory } from "@ReduxUtils";

import { RootState } from "../../../types";
import { useSelectSpotifyAccessToken } from "../../spotifyAccessToken/hooks";

const useLoadFunction = () => {
  const accessToken = useSelectSpotifyAccessToken();
  return useCallback(
    async ({ contextURI, deviceId }: { contextURI: string; deviceId: string }) => {
      await spotifyPlayerPlay({ accessToken, contextURI, deviceId });
    },
    [accessToken],
  );
};

const {
  reducer: loadReducer,
  useLoad: useSpotifyPlay,
  useSelectIsLoading: useSelectIsSpotifyPlayLoading,
  useSelectDidLoadSucceed: useSelectDidSpotifyPlaySucceed,
  useSelectDidLoadFail: useSelectDidSpotifyPlayFail,
} = makeLoadingFactory({
  useLoadFunction,
  selectStateFromRoot: (state: RootState) => state.spotify.player.play.load,
  INITIATE_LOADING: `INITIATE_SPOTIFY_PLAYER_PLAY`,
  SUCCESS_LOADING: `SUCCEED_SPOTIFY_PLAYER_PLAY`,
  FAILURE_LOADING: `FAILURE_SPOTIFY_PLAYER_PLAY`,
});

const play = combineReducers({
  load: loadReducer,
});

export const reducers = { play };
export {
  useSpotifyPlay,
  useSelectIsSpotifyPlayLoading,
  useSelectDidSpotifyPlaySucceed,
  useSelectDidSpotifyPlayFail,
};
