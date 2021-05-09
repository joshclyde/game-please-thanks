import React, { FC } from "react";
import styled from "styled-components";

import { Page, Link, Text, GameImg, Heading, RedLink, BottomIcons } from "@Common";

export const Img = styled(GameImg)`
  width: 88px;
  height: 126px;
  border: blue solid 1px;
  padding: 8px;
  align-self: center;
`;

const WhoOwnsThisDiv = styled.div`
  width: -webkit-fill-available;
  width: -moz-available;
  width: stretch;
  padding: 16px 32px;
  border: blue solid 1px;
`;

const GameDiv = styled(WhoOwnsThisDiv)`
  border-bottom: 0px;
  margin-top: 16px;
`;

const EditLink = styled(Link)`
  margin-top: 32px;
`;

const DeleteLink = styled(RedLink)`
  margin-top: 16px;
`;

interface Props {
  src: string;
  name: string;
  minPlayers: number;
  maxPlayers: number;
  isOnGamePass?: boolean;
  whoOwnsThis: Array<string>;
}

const GameDetailsRouteFC: FC<Props> = ({
  src,
  name,
  minPlayers,
  maxPlayers,
  isOnGamePass,
  whoOwnsThis = [`Bingle Bear`, `Josh`],
}) => {
  return (
    <Page header="GAME LIBRARY">
      <Img src={src} />
      <GameDiv>
        <Heading>{name}</Heading>
        <Text>{`Players: ${minPlayers}-${maxPlayers}`}</Text>
        <Text>{`Game Pass: ${isOnGamePass ? `Yup` : `Nope`}`}</Text>
      </GameDiv>
      <WhoOwnsThisDiv>
        <Heading>Who owns this</Heading>
        {whoOwnsThis.map((who) => (
          <Text>{who}</Text>
        ))}
      </WhoOwnsThisDiv>
      <EditLink>Edit</EditLink>
      <DeleteLink>Delete</DeleteLink>
    </Page>
  );
};

export const GameDetailsRoute = GameDetailsRouteFC;
