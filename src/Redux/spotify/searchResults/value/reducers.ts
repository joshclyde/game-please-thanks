import { makeReducer } from "@ReduxUtils";

import { makeCaseAddSpotifySearchResults } from "./actions";

const { reducer: value, addCase } = makeReducer<Record<string, Record<string, string>>>({
  initialState: {},
});
addCase(
  makeCaseAddSpotifySearchResults((state, { payload: { term, type, searchResults } }) => {
    const id = `${type}-${term}`;
    let stateResults: Record<string, string> | undefined;
    if (type === `album`) {
      const albums = searchResults.albums?.items;
      stateResults = albums?.reduce(
        (accumulated: Record<string, string>, simpleAlbum, index) => {
          accumulated[index] = simpleAlbum.id;
          return accumulated;
        },
        {},
      );
    }
    if (type === `track`) {
      const tracks = searchResults.tracks?.items;
      stateResults = tracks?.reduce(
        (accumulated: Record<string, string>, track, index) => {
          accumulated[index] = track.id;
          return accumulated;
        },
        {},
      );
    }
    return {
      ...state,
      [id]: {
        ...state[id],
        ...stateResults,
      },
    };
  }),
);

export const reducers = { value };
