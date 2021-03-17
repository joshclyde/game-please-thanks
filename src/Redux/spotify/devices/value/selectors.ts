import { RootState } from "@Redux";
import { makeUseSelector } from "@ReduxUtils";

export const makeSelectSpotifyDevices = () => (state: RootState) =>
  state.spotify.devices.value;
export const useSelectSpotifyDevices = makeUseSelector(makeSelectSpotifyDevices);

export const makeSelectSpotifyThisDeviceId = () => (state: RootState) =>
  state.spotify.devices.value.find(({ name }) => name === `Jams Tree`)?.id;

export const useSelectSpotifyThisDeviceId = makeUseSelector(
  makeSelectSpotifyThisDeviceId,
);
