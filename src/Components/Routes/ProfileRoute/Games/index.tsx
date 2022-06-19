import React, { FC } from "react";

import { ListOfGamesPaginated } from "@Common";
import { useGamesOwnedIds } from "@State";

export const Games: FC<{ scrollRef?: React.RefObject<HTMLDivElement> }> = ({
  scrollRef,
}) => {
  const gameIds = useGamesOwnedIds();
  return gameIds ? (
    <ListOfGamesPaginated gameIds={gameIds} scrollRef={scrollRef} />
  ) : null;
};
