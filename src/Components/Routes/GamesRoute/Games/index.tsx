import fuzzysort from "fuzzysort";
import React, { FC, useRef } from "react";
import styled from "styled-components";

import { ListOfGames, Heading } from "@Common";
import { useGames, useFriends } from "@State";

import { SORT_BY_OPTIONS, defaultSort, useSearchParams } from "../shared";

import { EmptyResults } from "./EmptyResults";
import { Pagination } from "./Pagination";

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
  sortBy,
}: {
  searchTerm?: string;
  playerCount?: number;
  ownedByFriend?: boolean;
  isOnGamePass?: boolean;
  sortBy?: string;
}): Array<string> => {
  const games = useGames();
  const friends = useFriends();
  const sortMethod =
    SORT_BY_OPTIONS.find(({ value }) => value === sortBy)?.sort || defaultSort;
  const gamesForFuzzySort = Object.entries(games)
    .filter(([gameId, game]) => {
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
    })
    .map(([gameId, { name }]) => ({ gameId, name }));
  if (searchTerm) {
    const results = fuzzysort.go(searchTerm, gamesForFuzzySort, {
      key: `name`,
      threshold: -100000,
    });
    return results
      .map((x) => {
        return x.obj.gameId;
      })
      .sort((gameId1, gameId2) => {
        return sortMethod(games[gameId1], games[gameId2]);
      });
  }
  return gamesForFuzzySort
    .map((x) => x.gameId)
    .sort((gameId1, gameId2) => {
      return sortMethod(games[gameId1], games[gameId2]);
    });
};

export const Games: FC<{}> = () => {
  const scrollRef = useRef(null);
  const {
    searchTerm,
    playerCount,
    ownedByFriend,
    isOnGamePass,
    page,
    sortBy,
  } = useSearchParams();
  const gameIds = useSelectFilteredGameIds({
    searchTerm,
    playerCount,
    ownedByFriend,
    isOnGamePass,
    sortBy,
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
            sortBy={sortBy}
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
