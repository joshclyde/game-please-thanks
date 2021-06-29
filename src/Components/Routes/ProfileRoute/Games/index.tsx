import React, { FC } from "react";

import { ListOfGamesPaginated } from "@Common";
import { useSelectProfileGamesOwnedIds } from "@Redux";

export const Games: FC<{ scrollRef?: React.RefObject<HTMLDivElement> }> = ({
  scrollRef,
}) => {
  const gameIds = useSelectProfileGamesOwnedIds();
  return gameIds ? (
    <ListOfGamesPaginated gameIds={gameIds} scrollRef={scrollRef} />
  ) : null;
};
