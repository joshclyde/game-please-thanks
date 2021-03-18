import range from "lodash/fp/range";
import React, { FC } from "react";

import { useSelectSpotifySearchResultsNumberOfAlbums } from "@Redux";

import { ListEntity } from "./ListEntity";

interface SearchResultsProps {
  term: string;
}

const AlbumsFC: FC<SearchResultsProps> = ({ term }) => {
  const searchResultsLength = useSelectSpotifySearchResultsNumberOfAlbums({
    term,
    type: `album`,
  });
  return (
    <>
      {range(0, searchResultsLength).map((index) => (
        <ListEntity term={term} index={index} />
      ))}
    </>
  );
};

export const Albums = AlbumsFC;
