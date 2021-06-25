import React, { FC } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Page, Text, FriendImg, List } from "@Common";
import { useSelectGame, useSelectUser, useSelectUid } from "@Redux";
import { COLORS } from "@Utils";

const Img = styled(FriendImg)`
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
  const { name } = useSelectGame(gameId);
  return <Text>{name}</Text>;
};

const FriendEntityRouteFC: FC<{}> = ({}) => {
  const uid = useSelectUid();
  const { friendId } = useParams<{ friendId: string }>();
  const { name, games, hasGamePass } = useSelectUser(friendId);
  return (
    <Page header="FRIENDS">
      <Img friendId={friendId} />
      <FirstList header={uid === friendId ? `${name} (you)` : name}>
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
      </List>
    </Page>
  );
};

export const FriendEntityRoute = FriendEntityRouteFC;
