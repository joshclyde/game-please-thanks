import range from "lodash/fp/range";
import React, { FC } from "react";
import { useSelector } from "react-redux";

import {
  makeSelectSpotifySearchIsLoadAttempted,
  makeSelectSpotifySearchIsLoading,
  makeSelectSpotifySearchIsLoadSuccessful,
  makeSelectSpotifySearchIsLoadFailure,
  makeSelectSpotifySearchResultsLength,
} from "@Redux";

import { SpotifySearchResultsEntity } from "./SpotifySearchResultsEntity";

interface Props {
  searchResultsKey: string;
}

const SpotifySearchResultsFC: FC<Props> = ({ searchResultsKey }) => {
  const isAttempted = useSelector(
    makeSelectSpotifySearchIsLoadAttempted(searchResultsKey),
  );
  const isLoading = useSelector(makeSelectSpotifySearchIsLoading(searchResultsKey));
  const isSuccessful = useSelector(
    makeSelectSpotifySearchIsLoadSuccessful(searchResultsKey),
  );
  const isFailure = useSelector(makeSelectSpotifySearchIsLoadFailure(searchResultsKey));
  const numberOfResults = useSelector(
    makeSelectSpotifySearchResultsLength(searchResultsKey),
  );

  if (!isAttempted) {
    return <div>Click "Search" to obtain search results.</div>;
  }

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

  return <div>This should never be occur.</div>;
};

export const SpotifySearchResults = SpotifySearchResultsFC;
