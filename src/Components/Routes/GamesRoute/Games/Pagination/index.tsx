import React, { FC } from "react";
import styled from "styled-components";

import { Text } from "@Common";

import { SearchParams } from "../../shared";

import { Arrow } from "./Arrow";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

const ResultsText = styled(Text)`
  margin: 0 auto 0 auto;
`;

interface Props extends Omit<SearchParams, "page"> {
  currentPage: number;
  numberOfResults: number;
  first: number;
  last: number;
  scrollRef: any;
}

export const Pagination: FC<Props> = ({
  searchTerm,
  playerCount,
  ownedByFriend,
  isOnGamePass,
  currentPage,
  numberOfResults,
  first,
  last,
  scrollRef,
  sortBy,
}) => {
  return (
    <Div>
      <Arrow
        searchTerm={searchTerm}
        playerCount={playerCount}
        ownedByFriend={ownedByFriend}
        isOnGamePass={isOnGamePass}
        sortBy={sortBy}
        currentPage={currentPage}
        numberOfResults={numberOfResults}
        direction="previous"
        first={first}
        last={last}
        scrollRef={scrollRef}
      />
      <ResultsText>{`${first + 1}-${last} of ${numberOfResults}`}</ResultsText>
      <Arrow
        searchTerm={searchTerm}
        playerCount={playerCount}
        ownedByFriend={ownedByFriend}
        isOnGamePass={isOnGamePass}
        sortBy={sortBy}
        currentPage={currentPage}
        numberOfResults={numberOfResults}
        direction="next"
        first={first}
        last={last}
        scrollRef={scrollRef}
      />
    </Div>
  );
};
