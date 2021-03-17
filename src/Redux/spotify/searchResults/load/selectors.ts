import { makeUseSelector } from "@ReduxUtils";

import { RootState } from "../../../types";

export const useSelectIsSpotifySearchResultsLoading = makeUseSelector(
  () => (state: RootState) => state.spotify.searchResults.load.isPending,
);

export const useSelectDidSpotifySearchResultsSucceed = makeUseSelector(
  () => (state: RootState) => state.spotify.searchResults.load.isSuccess,
);

export const useSelectDidSpotifySearchResultsFail = makeUseSelector(
  () => (state: RootState) => state.spotify.searchResults.load.isFailure,
);

export const useSelectSpotifySearchResultsError = makeUseSelector(
  () => (state: RootState) => state.spotify.searchResults.load.error,
);
