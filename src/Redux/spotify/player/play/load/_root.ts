import { useCallback } from "react";

import { spotifyPlayerPlay } from "@Api";
import { makeLoading } from "@ReduxUtils";

import { useSelectSpotifyAccessToken } from "../../../spotifyAccessToken/hooks";

const useExecute = () => {
  const accessToken = useSelectSpotifyAccessToken();
  return useCallback(
    async ({ contextURI, deviceId }: { contextURI: string; deviceId: string }) => {
      await spotifyPlayerPlay({ accessToken, contextURI, deviceId });
    },
    [accessToken],
  );
};

const { reducers: load, useLoad: useSpotifyPlay } = makeLoading({
  useExecute,
  START: `PENDING_SPOTIFY_PLAYER_PLAY`,
  SUCCESS: `SUCCEED_SPOTIFY_PLAYER_PLAY`,
  FAILURE: `FAILURE_SPOTIFY_PLAYER_PLAY`,
});

export const reducers = { load };
export { useSpotifyPlay };
