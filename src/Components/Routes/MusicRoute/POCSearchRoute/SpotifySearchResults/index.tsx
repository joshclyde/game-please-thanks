import range from "lodash/fp/range";
import React, { FC } from "react";

import {
  useSelectIsSpotifySearchResultsLoading,
  useSelectDidSpotifySearchResultsSucceed,
  useSelectDidSpotifySearchResultsFail,
  useSelectSpotifySearchResultsNumberOfAlbums,
} from "@Redux";

import { SpotifySearchResultsEntity } from "./SpotifySearchResultsEntity";

interface Props {
  searchResultsKey: string;
}

const SpotifySearchResultsFC: FC<Props> = ({ searchResultsKey }) => {
  const isLoading = useSelectIsSpotifySearchResultsLoading();
  const isSuccessful = useSelectDidSpotifySearchResultsSucceed();
  const isFailure = useSelectDidSpotifySearchResultsFail();
  const numberOfResults = useSelectSpotifySearchResultsNumberOfAlbums(searchResultsKey);

  if (isFailure) {
    return <div>An error occcured when loading search results.</div>;
  }

  if (isLoading) {
    return <div>Loading search results...</div>;
  }

  if (isSuccessful) {
    return (
      <div>
        {range(0, numberOfResults).map((searchResultsIndex) => (
          <SpotifySearchResultsEntity
            searchResultsKey={searchResultsKey}
            searchResultsIndex={searchResultsIndex}
          />
        ))}
      </div>
    );
  }

  return <div>Click "Search" to obtain search results.</div>;
  // return <div>This should never be occur.</div>;
};

export const SpotifySearchResults = SpotifySearchResultsFC;
