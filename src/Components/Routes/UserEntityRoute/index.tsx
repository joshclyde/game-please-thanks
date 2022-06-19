import React, { FC } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Page, Text, UserImg, List } from "@Common";
import { useUser, useUsersNameMaybeYou, useGame } from "@State";
import { COLORS } from "@Utils";

import { IsFriendCheckbox } from "./IsFriendCheckbox";

const Img = styled(UserImg)`
  width: 88px;
  height: 88px;
  border: ${COLORS.BLUE} solid 1px;
  padding: 8px;
  align-self: center;
`;

const FirstList = styled(List)`
  border-bottom: 0px;
  margin-top: 16px;
`;

const GameName: FC<{ gameId: string }> = ({ gameId }) => {
  const { name } = useGame(gameId);
  return <Text>{name}</Text>;
};

const UserEntityRouteFC: FC<{}> = ({}) => {
  const params = useParams<{ userId: string }>();
  const userId = params.userId as string;
  const { games, hasGamePass } = useUser(userId);
  const name = useUsersNameMaybeYou(userId);
  return (
    <Page header="USERS">
      <Img userId={userId} />
      <FirstList header={name}>
        <Text>Game Pass: {hasGamePass ? `Yes` : `No`}</Text>
      </FirstList>
      <List header="Games">
        {games ? (
          Object.entries(games).map(([gameId, game]) =>
            game.isOwned ? <GameName key={gameId} gameId={gameId} /> : null,
          )
        ) : (
          <Text>None</Text>
        )}
        <IsFriendCheckbox userId={userId} />
      </List>
    </Page>
  );
};

export const UserEntityRoute = UserEntityRouteFC;
