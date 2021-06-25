import React, { FC } from "react";

import { ListOfGames } from "@Common";
import { useSelectProfileGamesOwnedIds } from "@Redux";

export const Games: FC<{}> = () => {
  const gameIds = useSelectProfileGamesOwnedIds();
  return gameIds ? <ListOfGames gameIds={gameIds} /> : null;
};
