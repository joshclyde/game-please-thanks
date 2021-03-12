import { makeUseSelector } from "@ReduxUtils";

import { RootState } from "../../types";

export const makeSelectSpotifyAccessToken = () => (state: RootState) =>
  state.spotify.spotifyAccessToken;

export const useSelectSpotifyAccessToken = makeUseSelector(makeSelectSpotifyAccessToken);
