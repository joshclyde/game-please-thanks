import { SpotifySearchResponse, SpotifyDevice } from "@Api";

export const SET_SPOTIFY_ACCESS_TOKEN = `SET_SPOTIFY_ACCESS_TOKEN`;
export const makeActionSetSpotifyAccessToken = (spotifyAccessToken: string) => ({
  type: SET_SPOTIFY_ACCESS_TOKEN,
  payload: {
    spotifyAccessToken,
  },
});
export type ActionSetSpotifyAccessToken = ReturnType<
  typeof makeActionSetSpotifyAccessToken
>;

export const ADD_SPOTIFY_SEARCH_RESULTS = `ADD_SPOTIFY_SEARCH_RESULTS`;
export const makeActionAddSpotifySearchResults = (
  id: string,
  searchResponse: SpotifySearchResponse,
) => ({
  type: ADD_SPOTIFY_SEARCH_RESULTS,
  payload: {
    id,
    searchResponse,
  },
});
export type ActionAddSpotifySearchResults = ReturnType<
  typeof makeActionAddSpotifySearchResults
>;

export const SET_SPOTIFY_DEVICES = `SET_SPOTIFY_DEVICES`;
export const makeActionSetSpotifyDevices = (devices: Array<SpotifyDevice>) => ({
  type: SET_SPOTIFY_DEVICES,
  payload: {
    devices,
  },
});
export type ActionSetSpotifyDevices = ReturnType<typeof makeActionSetSpotifyDevices>;

export type Actions =
  | ActionSetSpotifyAccessToken
  | ActionAddSpotifySearchResults
  | ActionSetSpotifyDevices;
