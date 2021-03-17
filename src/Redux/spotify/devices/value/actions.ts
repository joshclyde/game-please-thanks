import { SpotifyDevice } from "@Api";
import { makeAction } from "@ReduxUtils";

const {
  makeCase: makeCaseSetSpotifyDevices,
  useDispatchAction: useSetSpotifyDevices,
} = makeAction(`SET_SPOTIFY_DEVICES`, (value: Array<SpotifyDevice>) => ({ value }));

export { makeCaseSetSpotifyDevices, useSetSpotifyDevices };
