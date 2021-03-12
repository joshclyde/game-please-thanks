import range from "lodash/fp/range";
import React, { FC } from "react";
import styled from "styled-components";

import { useSelectSpotifySearchResultsNumberOfAlbums } from "@Redux";

import { SearchResultsListEntity } from "./SearchResultsListEntity";

interface SearchResultsProps {
  className?: string;
  searchResultsKey: string;
}

const Div = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 4px;
  }
`;

const SearchResultsFC: FC<SearchResultsProps> = ({ searchResultsKey, className }) => {
  const searchResultsLength = useSelectSpotifySearchResultsNumberOfAlbums(
    searchResultsKey,
  );
  return (
    <Div className={className}>
      {range(0, searchResultsLength).map((index) => (
        <SearchResultsListEntity searchResultsKey={searchResultsKey} index={index} />
      ))}
    </Div>
  );
};

export const SearchResults = SearchResultsFC;
