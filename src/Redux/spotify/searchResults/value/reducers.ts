import { makeReducer } from "@ReduxUtils";

import { makeCaseAddSpotifySearchResults } from "./actions";

const { reducer: value, addCase } = makeReducer<Record<string, Record<string, string>>>({
  initialState: {},
});
addCase(
  makeCaseAddSpotifySearchResults((state, { payload: { term, type, searchResults } }) => {
    const albums = searchResults.albums?.items;
    const newSearchResults = albums.reduce(
      (accumulated: Record<string, string>, simpleAlbum, index) => {
        accumulated[index] = simpleAlbum.id;
        return accumulated;
      },
      {},
    );
    return {
      ...state,
      [`${type}-${term}`]: {
        ...state[`${type}-${term}`],
        ...newSearchResults,
      },
    };
  }),
);

export const reducers = { value };
