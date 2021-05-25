import React, { FC } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Page, Link, Text, FriendImg, RedLink, List } from "@Common";
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

const EditLink = styled(Link)`
  margin-top: 32px;
`;

const DeleteLink = styled(RedLink)`
  margin-top: 16px;
`;

interface Props {}

const GameName: FC<{ gameId: string }> = ({ gameId }) => {
  const { name } = useSelectGame(gameId);
  return <Text>{name}</Text>;
};

const FriendDetailsRouteFC: FC<Props> = ({}) => {
  const { friendId } = useParams<{ friendId: string }>();
  const { name, gamesOwned, hasGamePass } = useSelectFriend(friendId);
  return (
    <Page header="FRIENDS">
      <Img friendId={friendId} />
      <FirstList
        header={name}
        list={[`Game Pass: ${hasGamePass ? `Yes` : `No`}`]}
      ></FirstList>
      <List header="Games">
        {gamesOwned ? gamesOwned.map((gameId) => <GameName gameId={gameId} />) : `None`}
      </List>
      <EditLink>Edit</EditLink>
      <DeleteLink>Delete</DeleteLink>
    </Page>
  );
};

export const FriendDetailsRoute = FriendDetailsRouteFC;
