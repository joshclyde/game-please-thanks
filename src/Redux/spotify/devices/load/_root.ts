import { useCallback } from "react";

import { getSpotifyPlayerDevices } from "@Api";
import { RootState } from "@Redux";
import { makeLoadingFactory } from "@ReduxUtils";

import { useSelectSpotifyAccessToken } from "../../spotifyAccessToken/hooks";
import { useSetSpotifyDevices } from "../value/hooks";

const useLoadFunction = () => {
  const accessToken = useSelectSpotifyAccessToken();
  const setValue = useSetSpotifyDevices();
  return useCallback(async () => {
    const { data } = await getSpotifyPlayerDevices({ accessToken });
    setValue(data.devices);
  }, [accessToken, setValue]);
};

const {
  reducer,
  useLoad: useLoadSpotifyDevices,
  useSelectIsLoading: useSelectAreSpotifyDevicesLoading,
  useSelectDidLoadSucceed: useSelectDidSpotifyDevicesSucceed,
  useSelectDidLoadFail: useSelectDidSpotifyDevicesFail,
} = makeLoadingFactory({
  useLoadFunction,
  selectStateFromRoot: (state: RootState) => state.spotify.devices.load,
  INITIATE_LOADING: `INITIATE_LOADING_SPOTIFY_DEVICES`,
  SUCCESS_LOADING: `SUCCESS_LOADING_SPOTIFY_DEVICES`,
  FAILURE_LOADING: `FAILURE_LOADING_SPOTIFY_DEVICES`,
});

export {
  useLoadSpotifyDevices,
  useSelectAreSpotifyDevicesLoading,
  useSelectDidSpotifyDevicesSucceed,
  useSelectDidSpotifyDevicesFail,
};

export const reducers = {
  load: reducer,
};
