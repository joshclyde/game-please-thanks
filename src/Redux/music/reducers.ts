import {
  Actions,
  ActionSetSpotifyAccessToken,
  ActionAddSpotifySearchResults,
  ActionSetSpotifyDevices,
  SET_SPOTIFY_ACCESS_TOKEN,
  ADD_SPOTIFY_SEARCH_RESULTS,
  SET_SPOTIFY_DEVICES,
} from "./actions";
import { MusicState } from "./types";

const initialState: MusicState = {
  spotifyAccessToken: ``,
  spotify: {
    searchResults: {},
    devices: [],
  },
};

const reduceSetSpotifyAccessToken = (
  state: MusicState,
  { payload: { spotifyAccessToken } }: ActionSetSpotifyAccessToken,
) => {
  return {
    ...state,
    spotifyAccessToken,
  };
};

const reduceAddSpotifySearchResults = (
  state: MusicState,
  { payload: { id, searchResponse } }: ActionAddSpotifySearchResults,
) => {
  return {
    ...state,
    spotify: {
      ...state.spotify,
      searchResults: {
        [id]: searchResponse,
        ...state.spotify.searchResults,
      },
    },
  };
};

const reduceSetSpotifyDevices = (
  state: MusicState,
  { payload: { devices } }: ActionSetSpotifyDevices,
) => {
  return {
    ...state,
    spotify: {
      ...state.spotify,
      devices,
    },
  };
};

export const music = (state = initialState, action: Actions): MusicState => {
  const { type } = action;
  switch (type) {
    case SET_SPOTIFY_ACCESS_TOKEN:
      return reduceSetSpotifyAccessToken(state, action as ActionSetSpotifyAccessToken);
    case ADD_SPOTIFY_SEARCH_RESULTS:
      return reduceAddSpotifySearchResults(
        state,
        action as ActionAddSpotifySearchResults,
      );
    case SET_SPOTIFY_DEVICES:
      return reduceSetSpotifyDevices(state, action as ActionSetSpotifyDevices);
  }
  return state;
};
