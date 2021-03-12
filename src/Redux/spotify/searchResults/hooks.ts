import { useSelectSearchResults } from "./_root";

export const useSelectSpotifySearchResultsNumberOfAlbums = (entryId: string) => {
  // TODO: should useSelector instead of this hook
  const entry = useSelectSearchResults(entryId);
  return entry?.albums.items.length;
};

export const useSelectSpotifySearchResultsAlbumName = (
  entryId: string,
  index: number,
) => {
  const entry = useSelectSearchResults(entryId);
  return entry?.albums.items[index].name;
};

export const useSelectSpotifySearchResultsAlbumArtistName = (
  entryId: string,
  index: number,
) => {
  const entry = useSelectSearchResults(entryId);
  return entry?.albums.items[index].artists[0].name;
};

export const useSelectSpotifySearchResultsAlbumImageUrl = (
  entryId: string,
  index: number,
) => {
  const entry = useSelectSearchResults(entryId);
  return entry?.albums.items[index].images[1].url;
};

export {
  useAddSpotifySearchResults,
  useSelectSearchResults,
  useLoadSpotifySearchResults,
  useSelectIsSpotifySearchResultsLoading,
  useSelectDidSpotifySearchResultsSucceed,
  useSelectDidSpotifySearchResultsFail,
  useSelectSpotifySearchResultsError,
} from "./_root";
