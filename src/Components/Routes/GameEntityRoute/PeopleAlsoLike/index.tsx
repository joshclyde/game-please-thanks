import React, { FC } from "react";

import { Link, List, Text } from "@Common";
import { useGame } from "@State";

const Entity: FC<{ gameId: string }> = ({ gameId }) => {
  const game = useGame(gameId);
  if (!game) {
    /*
      Not all of the gameIds in PAL are decided to be games
      by my scripts. For example, in rocket league there is
      a COD game and a Rainbox Six Siege Deluxe Edition that
      are in MegaList.json but are not included as a game.
    */
    return null;
  }
  return (
    <Text>
      <Link to={`/games/${gameId}`}>{game.name}</Link>
    </Text>
  );
};

export const PeopleAlsoLike: FC<{ gameId: string }> = ({ gameId }) => {
  const { productIdsPAL } = useGame(gameId);

  return (
    <List header="People Also Like">
      {productIdsPAL.map((palGameId) => {
        return <Entity key={palGameId} gameId={palGameId} />;
      })}
    </List>
  );
};
