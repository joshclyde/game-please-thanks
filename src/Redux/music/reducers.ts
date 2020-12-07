import {
  Actions,
  ActionSetSpotifyAccessToken,
  ActionAddSpotifySearchResults,
  SET_SPOTIFY_ACCESS_TOKEN,
  ADD_SPOTIFY_SEARCH_RESULTS,
} from "./actions";
import { MusicState } from "./types";

const initialState: MusicState = {
  spotifyAccessToken: ``,
  spotify: {
    searchResults: {},
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
  }
  return state;
};
