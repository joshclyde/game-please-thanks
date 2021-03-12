import { useCallback } from "react";
import { combineReducers } from "redux";

import { SpotifySearchResponse, spotifySearch, SpotifySearchParams } from "@Api";
import { makeKeyValueFactory, makeLoadingFactory } from "@ReduxUtils";

import { RootState } from "../../types";
import { useSelectSpotifyAccessToken } from "../spotifyAccessToken/hooks";

const {
  reducer: valueReducer,
  useSetEntryValue: useAddSpotifySearchResults,
  useSelectEntryValue: useSelectSearchResults,
} = makeKeyValueFactory<RootState, SpotifySearchResponse>({
  actionIdentifier: `SPOTIFY_SEARCH_RESULTS`,
  selectStateFromRoot: (state) => state.spotify.searchResults.value,
});

const makeSpotifySearchResultsKey = ({
  q,
  type,
  market,
  limit,
  offset,
  include_external,
}: Omit<SpotifySearchParams, "accessToken">) => {
  return `${q}${type}${market}${limit}${offset}${include_external}`;
};

const useLoadFunction = () => {
  const accessToken = useSelectSpotifyAccessToken();
  const addSearchResults = useAddSpotifySearchResults();
  return useCallback(
    async (searchTerm: string) => {
      const searchResultsKey = makeSpotifySearchResultsKey({
        q: searchTerm,
        limit: 10,
        market: `from_token`,
        type: `album`,
      });
      const { data } = await spotifySearch({
        accessToken,
        q: searchTerm,
        limit: 10,
        market: `from_token`,
        type: `album`,
      });
      addSearchResults(searchResultsKey, data);
    },
    [accessToken, addSearchResults],
  );
};

const {
  reducer: loadReducer,
  useLoad: useLoadSpotifySearchResults,
  useSelectIsLoading: useSelectIsSpotifySearchResultsLoading,
  useSelectDidLoadSucceed: useSelectDidSpotifySearchResultsSucceed,
  useSelectDidLoadFail: useSelectDidSpotifySearchResultsFail,
  useSelectError: useSelectSpotifySearchResultsError,
} = makeLoadingFactory({
  selectStateFromRoot: (state: RootState) => state.spotify.searchResults.load,
  useLoadFunction,
  INITIATE_LOADING: `INITIATE_LOADING_SPOTIFY_SEARCH_RESULTS`,
  SUCCESS_LOADING: `SUCCESS_LOADING_SPOTIFY_SEARCH_RESULTS`,
  FAILURE_LOADING: `FAILURE_LOADING_SPOTIFY_SEARCH_RESULTS`,
});

export const reducers = {
  searchResults: combineReducers({
    value: valueReducer,
    load: loadReducer,
  }),
};

export {
  useAddSpotifySearchResults,
  useSelectSearchResults,
  useLoadSpotifySearchResults,
  useSelectIsSpotifySearchResultsLoading,
  useSelectDidSpotifySearchResultsSucceed,
  useSelectDidSpotifySearchResultsFail,
  useSelectSpotifySearchResultsError,
};
