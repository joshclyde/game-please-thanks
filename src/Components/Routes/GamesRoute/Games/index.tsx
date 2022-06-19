import React, { FC, useRef } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { ListOfGames, Heading } from "@Common";
import { useGames, useFriends } from "@State";

import { QUERY_PARAM } from "../shared";

import { EmptyResults } from "./EmptyResults";
import { Pagination } from "./Pagination";

type ConvertMethod<T> = (value: any) => T;
const convertParam = <T extends any>(
  value: string | null,
  convertMethod: ConvertMethod<T>,
  defaultValue?: T,
) => {
  if (value != null) {
    return convertMethod(value);
  }
  return defaultValue;
};

const Div = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const useSelectFilteredGameIds = ({
  searchTerm,
  playerCount,
  ownedByFriend,
  isOnGamePass,
}: {
  searchTerm?: string;
  playerCount?: number;
  ownedByFriend?: boolean;
  isOnGamePass?: boolean;
}) => {
  const games = useGames();
  const friends = useFriends();
  return Object.keys(games).filter((gameId) => {
    const game = games[gameId];
    if (
      searchTerm != null &&
      !game.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }
    if (
      playerCount != null &&
      (playerCount < game.minPlayers || playerCount > game.maxPlayers)
    ) {
      return false;
    }
    if (
      ownedByFriend &&
      friends &&
      !Object.values(friends).some((friend) => friend.games?.[gameId]?.isOwned)
    ) {
      return false;
    }
    if (isOnGamePass && !game.isOnGamePass) {
      return false;
    }
    return true;
  });
};

export const Games: FC<{}> = () => {
  const scrollRef = useRef(null);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchTerm = convertParam(params.get(QUERY_PARAM.SEARCH_TERM), String);
  const playerCount = convertParam(params.get(QUERY_PARAM.PLAYER_COUNT), Number);
  const ownedByFriend = convertParam(params.get(QUERY_PARAM.OWNED_BY_FRIEND), Boolean);
  const isOnGamePass = convertParam(params.get(QUERY_PARAM.IS_ON_GAME_PASS), Boolean);
  const page = convertParam(params.get(QUERY_PARAM.PAGE), Number, 1) as number;
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
        <EmptyResults />
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
