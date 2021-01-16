import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import {
  spotifySearch,
  SpotifySearchParams,
  getSpotifyPlayerDevices,
  initializeSpotifyPlayer,
  spotifyPlayerPlay,
} from "@Api";

import {
  makeActionSetSharedLoadingInitiate,
  makeActionSetSharedLoadingSuccess,
  makeActionSetSharedLoadingFailure,
} from "../shared";
import { State } from "../types";

import {
  makeActionAddSpotifySearchResults,
  makeActionSetSpotifyAccessToken,
  makeActionSetSpotifyDevices,
} from "./actions";
import { selectSpotifyAccessToken } from "./selectors";

export const makeSpotifySearchResultsKey = ({
  q,
  type,
  market,
  limit,
  offset,
  include_external,
}: SpotifySearchParams) => {
  return `${q}${type}${market}${limit}${offset}${include_external}`;
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

const FETCH_SPOTIFY_DEVICES_ID = `FETCH_SPOTIFY_DEVICES_ID`;
export const makeThunkFetchSpotifyDevices = (): ThunkAction<
  void,
  State,
  unknown,
  Action<string>
> => async (dispatch, getState) => {
  const state = getState();
  const accessToken = selectSpotifyAccessToken(state);
  dispatch(makeActionSetSharedLoadingInitiate(FETCH_SPOTIFY_DEVICES_ID));
  try {
    const { data } = await getSpotifyPlayerDevices({ accessToken });
    dispatch(makeActionSetSharedLoadingSuccess(FETCH_SPOTIFY_DEVICES_ID));
    dispatch(makeActionSetSpotifyDevices(data.devices));
  } catch (error) {
    dispatch(makeActionSetSharedLoadingFailure(FETCH_SPOTIFY_DEVICES_ID, error));
  }
};

const INITIALIZE_SPOTIFY_PLAYER = `INITIALIZE_SPOTIFY_PLAYER`;
export const makeThunkCreateSpotifyPlayer = (): ThunkAction<
  void,
  State,
  unknown,
  Action<string>
> => async (dispatch, getState) => {
  const state = getState();
  const accessToken = selectSpotifyAccessToken(state);
  dispatch(makeActionSetSharedLoadingInitiate(INITIALIZE_SPOTIFY_PLAYER));
  try {
    await initializeSpotifyPlayer({ accessToken });
    dispatch(makeActionSetSharedLoadingSuccess(INITIALIZE_SPOTIFY_PLAYER));
  } catch (error) {
    dispatch(makeActionSetSharedLoadingFailure(INITIALIZE_SPOTIFY_PLAYER, error));
  }
};

const SPOTIFY_PLAYER_PLAY = `SPOTIFY_PLAYER_PLAY`;
export const makeThunkSpotifyPlayerPlay = ({
  contextURI,
  deviceId,
}: {
  contextURI: string;
  deviceId: string;
}): ThunkAction<void, State, unknown, Action<string>> => async (dispatch, getState) => {
  const state = getState();
  const accessToken = selectSpotifyAccessToken(state);
  dispatch(makeActionSetSharedLoadingInitiate(SPOTIFY_PLAYER_PLAY));
  try {
    await spotifyPlayerPlay({ accessToken, contextURI, deviceId });
    dispatch(makeActionSetSharedLoadingSuccess(SPOTIFY_PLAYER_PLAY));
  } catch (error) {
    dispatch(makeActionSetSharedLoadingFailure(SPOTIFY_PLAYER_PLAY, error));
  }
};
