import { SpotifyDevice } from "@Api";
import { makeReducer } from "@ReduxUtils";

import { makeCaseSetSpotifyDevices } from "./actions";

const { reducer: value, addCase } = makeReducer<Array<SpotifyDevice>>({
  initialState: [],
});
addCase(makeCaseSetSpotifyDevices((_state, action) => action.payload.value));

export const reducers = {
  value,
};
