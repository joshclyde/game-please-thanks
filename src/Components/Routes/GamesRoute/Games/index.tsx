import React, { FC } from "react";
import styled from "styled-components";

import { useSelectCurrentFriendGroupGameIds } from "@Redux";

import { Entity } from "./Entity";

const Div = styled.div`
  width: 100%;
`;

const GamesFC: FC<{}> = () => {
  const gameIds = useSelectCurrentFriendGroupGameIds();
  return (
    <Div>
      {gameIds.map((gameId) => (
        <Entity gameId={gameId} key={gameId} />
      ))}
    </Div>
  );
};

export const Games = GamesFC;
