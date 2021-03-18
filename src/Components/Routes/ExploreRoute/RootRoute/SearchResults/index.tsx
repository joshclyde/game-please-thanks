import range from "lodash/fp/range";
import React, { FC } from "react";
import styled from "styled-components";

import { useSelectSpotifySearchResultsNumberOfAlbums } from "@Redux";

import { SearchResultsListEntity } from "./SearchResultsListEntity";

interface SearchResultsProps {
  className?: string;
  term: string;
  type: "album";
}

const Div = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 4px;
  }
`;

const SearchResultsFC: FC<SearchResultsProps> = ({ term, type, className }) => {
  const searchResultsLength = useSelectSpotifySearchResultsNumberOfAlbums({ term, type });
  return (
    <Div className={className}>
      {range(0, searchResultsLength).map((index) => (
        <SearchResultsListEntity term={term} type={type} index={index} />
      ))}
    </Div>
  );
};

export const SearchResults = SearchResultsFC;
