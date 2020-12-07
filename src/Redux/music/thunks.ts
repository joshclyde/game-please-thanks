import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { spotifySearch, SpotifySearchParams } from "@Api";

import {
  makeActionSetSharedLoadingInitiate,
  makeActionSetSharedLoadingSuccess,
  makeActionSetSharedLoadingFailure,
} from "../shared";
import { State } from "../types";

import {
  makeActionAddSpotifySearchResults,
  makeActionSetSpotifyAccessToken,
} from "./actions";

export const makeSpotifySearchResultsKey = ({
  q,
  type,
  market,
  limit,
  offset,
  include_external,
}: SpotifySearchParams) => {
  const query =
    typeof q === `string` ? q.replace(` `, `%20`) : q.join(`%20`).replace(` `, `%20`);
  return `${query}${type}${market}${limit}${offset}${include_external}`;
};

export const makeThunkSetSpotifyAccessToken = ({
  spotifyAccessToken,
  shouldSaveToLocalStorage,
}: {
  spotifyAccessToken: string;
  shouldSaveToLocalStorage: boolean;
}): ThunkAction<void, State, unknown, Action<string>> => async (dispatch, getState) => {
  dispatch(makeActionSetSpotifyAccessToken(spotifyAccessToken));
  if (shouldSaveToLocalStorage) {
    localStorage.setItem(`spotifyAccessToken`, spotifyAccessToken);
  }
};

export const makeThunkFetchSpotifySearchResults = (
  searchParams: SpotifySearchParams,
): ThunkAction<void, State, unknown, Action<string>> => async (dispatch, getState) => {
  const searchResultsKey = makeSpotifySearchResultsKey(searchParams);
  dispatch(makeActionSetSharedLoadingInitiate(searchResultsKey));
  try {
    const { data } = await spotifySearch(searchParams);
    dispatch(makeActionSetSharedLoadingSuccess(searchResultsKey));
    dispatch(makeActionAddSpotifySearchResults(searchResultsKey, data));
  } catch (error) {
    dispatch(makeActionSetSharedLoadingFailure(searchResultsKey, error));
  }
};
