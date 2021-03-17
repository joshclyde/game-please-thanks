import { makeUseSelector } from "@ReduxUtils";

import { RootState } from "../../../types";

export const useSelectIsLoadingSpotifyDevices = makeUseSelector(
  () => (state: RootState) => state.spotify.devices.load.isPending,
);
export const useSelectDidLoadSucceedSpotifyDevices = makeUseSelector(
  () => (state: RootState) => state.spotify.devices.load.isSuccess,
);
export const useSelectDidLoadFailSpotifyDevices = makeUseSelector(
  () => (state: RootState) => state.spotify.devices.load.isFailure,
);
