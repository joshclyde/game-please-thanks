import { SpotifyDevice } from "@Api";
import { makeReducer2 } from "@ReduxUtils";

import { makeCaseSetSpotifyDevices } from "./actions";

const { reducer: value, addCase } = makeReducer2<Array<SpotifyDevice>>({
  initialState: [],
});
addCase(makeCaseSetSpotifyDevices((_state, action) => action.payload.value));

export const reducers = {
  value,
};
