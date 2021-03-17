import { useCallback } from "react";

import { initializeSpotifyPlayer } from "@Api";
import { makeLoading } from "@ReduxUtils";

import { useSelectSpotifyAccessToken } from "../spotifyAccessToken/hooks";

const useExecute = () => {
  const accessToken = useSelectSpotifyAccessToken();
  return useCallback(async () => {
    await initializeSpotifyPlayer({ accessToken });
  }, [accessToken]);
};

const { reducers: load, useLoad: useLoadSpotifyPlayer } = makeLoading({
  useExecute,
  START: `START_LOADING_SPOTIFY_PLAYER`,
  SUCCESS: `SUCCESS_LOADING_SPOTIFY_PLAYER  `,
  FAILURE: `FAILURE_LOADING_SPOTIFY_PLAYER`,
});

export const reducers = { load };
export { useLoadSpotifyPlayer };
