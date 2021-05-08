import React, { FC } from "react";
import styled from "styled-components";

import { PageHeader, Link, Text, GameImg, Heading } from "@Common";

export const Img = styled(GameImg)`
  width: 88px;
  height: 126px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

interface Props {
  src: string;
  name: string;
  minPlayers: number;
  maxPlayers: number;
  isOnGamePass?: boolean;
  whoOwnsThis: Array<string>;
}

const GameOverviewRouteFC: FC<Props> = ({
  src,
  name,
  minPlayers,
  maxPlayers,
  isOnGamePass,
  whoOwnsThis,
}) => {
  return (
    <Div>
      <PageHeader>GAME LIBRARY</PageHeader>
      <Img src={src} />
      <Heading>{name}</Heading>
      <Text>{`Players: ${minPlayers}-${maxPlayers}`}</Text>
      <Text>{`Game Pass: ${isOnGamePass ? `Yup` : `Nope`}`}</Text>
      <Heading>Who owns this</Heading>
      {whoOwnsThis.map((who) => (
        <Text>{who}</Text>
      ))}
    </Div>
  );
};

export const GameOverviewRoute = GameOverviewRouteFC;
