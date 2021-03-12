import { SpotifyDevice } from "@Api";
import { makeReducer, makeCaseSetValue } from "@ReduxUtils";

import { isSetSpotifyDevices } from "./actions";

const reducer = makeReducer<Array<SpotifyDevice>>({ initialState: [] });
reducer.addCase(makeCaseSetValue(isSetSpotifyDevices));

export const reducers = {
  value: reducer,
};
