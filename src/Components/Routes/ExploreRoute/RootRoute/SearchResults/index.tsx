import React, { FC } from "react";
import styled from "styled-components";

import { Albums } from "./Albums";
import { Tracks } from "./Tracks";

interface SearchResultsProps {
  className?: string;
  term: string;
  type: "album" | "track";
}

const Div = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 4px;
  }
`;

const SearchResultsFC: FC<SearchResultsProps> = ({ term, type, className }) => {
  if (type === `album`) {
    return (
      <Div className={className}>
        <Albums term={term} />;
      </Div>
    );
  }
  if (type === `track`) {
    return (
      <Div className={className}>
        <Tracks term={term} />;
      </Div>
    );
  }
};

export const SearchResults = SearchResultsFC;
