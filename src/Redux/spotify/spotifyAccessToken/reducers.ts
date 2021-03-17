import { makeReducer2 } from "@ReduxUtils";

import { makeCaseSetSpotifyAccessTokenAction } from "./actions";

const { reducer: spotifyAccessToken, addCase } = makeReducer2<string>({
  initialState: null,
});
addCase(makeCaseSetSpotifyAccessTokenAction((_state, action) => action.payload.value));

export const reducers = {
  spotifyAccessToken,
};
