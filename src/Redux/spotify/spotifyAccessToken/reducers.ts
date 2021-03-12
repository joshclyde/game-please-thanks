import { makeReducer, makeCaseSetValue } from "@ReduxUtils";

import { isSetSpotifyAccessTokenAction } from "./actions";

const reducer = makeReducer<string>({ initialState: null });
reducer.addCase(makeCaseSetValue(isSetSpotifyAccessTokenAction));

export const reducers = {
  spotifyAccessToken: reducer,
};
