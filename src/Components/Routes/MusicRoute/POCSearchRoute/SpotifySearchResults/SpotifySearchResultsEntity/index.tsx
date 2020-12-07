import React, { FC } from "react";
import { useSelector } from "react-redux";

import { makeSelectSpotifySearchResultsAlbumImageUrl } from "@Redux";

interface Props {
  searchResultsKey: string;
  searchResultsIndex: number;
}

const SpotifySearchResultsEntityFC: FC<Props> = ({
  searchResultsKey,
  searchResultsIndex,
}) => {
  const albumUrl = useSelector(
    makeSelectSpotifySearchResultsAlbumImageUrl(searchResultsKey, searchResultsIndex),
  );
  return <img src={albumUrl} width={128} height={128} />;
};

export const SpotifySearchResultsEntity = SpotifySearchResultsEntityFC;
