import React, { FC } from "react";
import styled from "styled-components";

import { Entity } from "./Entity";

const Div = styled.div`
  width: 100%;
`;

interface Props {
  gameIds: Array<string>;
}

const ListOfGamesFC: FC<Props> = ({ gameIds }) => {
  return (
    <Div>
      {gameIds.map((gameId) => (
        <Entity gameId={gameId} key={gameId} />
      ))}
    </Div>
  );
};

export const ListOfGames = ListOfGamesFC;
