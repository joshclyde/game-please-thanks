import React, { FC, useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { IconLeftArrow, IconRightArrow } from "@Common";

import { makeSearchUrl, SearchParams } from "../../../shared";

interface Props extends Omit<SearchParams, "page"> {
  first: number;
  last: number;
  currentPage: number;
  direction: "previous" | "next";
  numberOfResults: number;
  scrollRef: any;
}

const EmptyDiv = styled.div`
  width: 21px;
`;

export const Arrow: FC<Props> = ({
  searchTerm,
  playerCount,
  ownedByFriend,
  isOnGamePass,
  currentPage,
  first,
  last,
  numberOfResults,
  direction,
  scrollRef,
  sortBy,
}) => {
  const onClick = useCallback(
    () => scrollRef.current.scrollIntoView({ behavior: `smooth`, inline: `start` }),
    [scrollRef],
  );
  if (direction === `previous`) {
    return first > 0 ? (
      <Link
        to={makeSearchUrl({
          searchTerm,
          playerCount,
          ownedByFriend,
          isOnGamePass,
          page: currentPage - 1,
          sortBy,
        })}
        onClick={onClick}
      >
        <IconLeftArrow />
      </Link>
    ) : (
      <EmptyDiv />
    );
  }

  return last < numberOfResults ? (
    <Link
      to={makeSearchUrl({
        searchTerm,
        playerCount,
        ownedByFriend,
        isOnGamePass,
        page: currentPage + 1,
        sortBy,
      })}
      onClick={onClick}
    >
      <IconRightArrow />
    </Link>
  ) : (
    <EmptyDiv />
  );
};
