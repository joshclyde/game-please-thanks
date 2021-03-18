import { SimplifiedAlbum } from "@Api";
import { makeReducer } from "@ReduxUtils";

import { makeCaseAddSpotifySearchResults } from "../searchResults/value/actions";

type SimplifiedAlbums = Record<string, SimplifiedAlbum>;

const { reducer: simplifiedAlbums, addCase } = makeReducer<SimplifiedAlbums>({
  initialState: {},
});
addCase(
  makeCaseAddSpotifySearchResults((state, action) => {
    const albums = action.payload.searchResults.albums?.items || [];
    const newSearchResults = albums.reduce(
      (accumulated: SimplifiedAlbums, simpleAlbum) => {
        accumulated[simpleAlbum.id] = simpleAlbum;
        return accumulated;
      },
      {},
    );
    return {
      ...state,
      ...newSearchResults,
    };
  }),
);

export const reducers = { simplifiedAlbums };
