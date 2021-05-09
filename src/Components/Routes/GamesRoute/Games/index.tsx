import React, { FC } from "react";
import styled from "styled-components";

import { Entity } from "./Entity";

const games = [
  {
    src: `/assets/overwatch.jpg`,
    to: `/games/123`,
    title: `Overwatch`,
    text: `Players: 1-6`,
  },
  {
    src: `/assets/rocketleague.jpg`,
    to: `/games/9`,
    title: `Rocket League`,
    text: `Players: 1-6`,
  },
  {
    src: `/assets/smite.jpg`,
    to: `/games/9`,
    title: `Smite`,
    text: `Players: 1-5`,
  },
  {
    src: `/assets/gtav.jpeg`,
    to: `/games/9`,
    title: `GTA V`,
    text: `Players: 1-12`,
  },
];

const Div = styled.div`
  width: 100%;
`;

const GamesFC: FC<{}> = () => {
  return (
    <Div>
      {games.map((gameProps) => (
        <Entity {...gameProps} />
      ))}
    </Div>
  );
};

export const Games = GamesFC;
