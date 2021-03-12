import { SpotifyDevice } from "@Api";
import { makeActionSetValue } from "@ReduxUtils";

const {
  isAction: isSetSpotifyDevices,
  useDispatchAction: useSetSpotifyDevices,
} = makeActionSetValue<"SET_SPOTIFY_DEVICES", Array<SpotifyDevice>>(
  `SET_SPOTIFY_DEVICES`,
);

export { isSetSpotifyDevices, useSetSpotifyDevices };
