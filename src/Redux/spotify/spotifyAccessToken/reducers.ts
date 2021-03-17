import { makeReducer } from "@ReduxUtils";

import { makeCaseSetSpotifyAccessTokenAction } from "./actions";

const { reducer: spotifyAccessToken, addCase } = makeReducer<string>({
  initialState: null,
});
addCase(makeCaseSetSpotifyAccessTokenAction((_state, action) => action.payload.value));

export const reducers = {
  spotifyAccessToken,
};
