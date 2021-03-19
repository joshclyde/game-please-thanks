import React, { FC } from "react";

import { useSelectSpotifySearchResultsTrackIds } from "@Redux";

import { ListEntity } from "./ListEntity";

interface SearchResultsProps {
  term: string;
}

const TracksFC: FC<SearchResultsProps> = ({ term }) => {
  const trackIds = useSelectSpotifySearchResultsTrackIds({ term, type: `track` });
  return (
    <>
      {trackIds.map((trackId) => (
        <ListEntity key={trackId} trackId={trackId} />
      ))}
    </>
  );
};

export const Tracks = TracksFC;
