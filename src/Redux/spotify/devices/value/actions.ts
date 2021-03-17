import { SpotifyDevice } from "@Api";
import { makeAction2 } from "@ReduxUtils";

const {
  makeCase: makeCaseSetSpotifyDevices,
  useDispatchAction: useSetSpotifyDevices,
} = makeAction2(`SET_SPOTIFY_DEVICES`, (value: Array<SpotifyDevice>) => ({ value }));

export { makeCaseSetSpotifyDevices, useSetSpotifyDevices };
