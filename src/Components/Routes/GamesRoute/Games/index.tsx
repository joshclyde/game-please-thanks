import React, { FC, useRef } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { ListOfGames, Heading } from "@Common";
import { useSelectFilteredGameIds } from "@Redux";

import { QUERY_PARAM } from "../shared";

import { EmptyResults } from "./EmptyResults";
import { Pagination } from "./Pagination";

type ConvertMethod<T> = (value: any) => T;
const convertParam = <T extends any>(
  value: string | null,
  convertMethod: ConvertMethod<T>,
) => {
  if (value != null) {
    return convertMethod(value);
  }
  return undefined;
};

const Div = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Games: FC<{}> = () => {
  const scrollRef = useRef(null);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchTerm = convertParam(params.get(QUERY_PARAM.SEARCH_TERM), String);
  const playerCount = convertParam(params.get(QUERY_PARAM.PLAYER_COUNT), Number);
  const ownedByFriend = convertParam(params.get(QUERY_PARAM.OWNED_BY_FRIEND), Boolean);
  const isOnGamePass = convertParam(params.get(QUERY_PARAM.IS_ON_GAME_PASS), Boolean);
  const page = Number(params.get(QUERY_PARAM.PAGE));
  const gameIds = useSelectFilteredGameIds({
    searchTerm,
    playerCount,
    ownedByFriend,
    isOnGamePass,
  });
  const first = page ? 10 * (page - 1) : 0;
  const last = Math.min(first + 10, gameIds.length);
  const gameIdsForPage = gameIds.slice(first, last);

  return (
    <Div>
      <Heading ref={scrollRef}>Results</Heading>
      {gameIds.length === 0 ? (
        <EmptyResults></EmptyResults>
      ) : (
        <>
          <ListOfGames gameIds={gameIdsForPage} />
          <Pagination
            searchTerm={searchTerm}
            playerCount={playerCount}
            ownedByFriend={ownedByFriend}
            isOnGamePass={isOnGamePass}
            currentPage={page}
            numberOfResults={gameIds.length}
            first={first}
            last={last}
            scrollRef={scrollRef}
          />
        </>
      )}
    </Div>
  );
};
