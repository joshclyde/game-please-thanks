import { useCallback } from "react";

import { getSpotifyPlayerDevices } from "@Api";
import { makeLoading } from "@ReduxUtils";

import { useSelectSpotifyAccessToken } from "../../spotifyAccessToken/hooks";
import { useSetSpotifyDevices } from "../value/hooks";

const useExecute = () => {
  const accessToken = useSelectSpotifyAccessToken();
  const setValue = useSetSpotifyDevices();
  return useCallback(async () => {
    const { data } = await getSpotifyPlayerDevices({ accessToken });
    setValue(data.devices);
  }, [accessToken, setValue]);
};

const { reducers: load, useLoad: useLoadSpotifyDevices } = makeLoading({
  useExecute,
  START: `START_LOADING_SPOTIFY_DEVICES`,
  SUCCESS: `SUCCESS_LOADING_SPOTIFY_DEVICES`,
  FAILURE: `FAILURE_LOADING_SPOTIFY_DEVICES`,
});

export { useLoadSpotifyDevices };

export const reducers = {
  load,
};
