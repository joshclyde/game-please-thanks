import React, { FC } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Page, Text, FriendImg, List } from "@Common";
import { useSelectGame, useSelectFriend } from "@Redux";

export const Img = styled(FriendImg)`
  width: 88px;
  height: 88px;
  border: blue solid 1px;
  padding: 8px;
  align-self: center;
`;

const FirstList = styled(List)`
  border-bottom: 0px;
  margin-top: 16px;
`;

interface Props {
  gameId: string;
}

const GameName: FC<Props> = ({ gameId }) => {
  const { name } = useSelectGame(gameId);
  return <Text>{name}</Text>;
};

const FriendEntityRouteFC: FC<Props> = ({}) => {
  const { friendId } = useParams<{ friendId: string }>();
  const { name, gamesOwned, hasGamePass } = useSelectFriend(friendId);
  return (
    <Page header="FRIENDS">
      <Img friendId={friendId} />
      <FirstList header={name} list={[`Game Pass: ${hasGamePass ? `Yes` : `No`}`]} />
      <List header="Games">
        {gamesOwned ? gamesOwned.map((gameId) => <GameName gameId={gameId} />) : `None`}
      </List>
    </Page>
  );
};

export const FriendEntityRoute = FriendEntityRouteFC;
