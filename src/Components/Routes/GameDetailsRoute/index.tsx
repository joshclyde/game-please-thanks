import React, { FC } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Page, Link, Text, GameImg, Heading, RedLink } from "@Common";
import {
  useSelectGame,
  useSelectCurrentFriendIdsThatOwnGame,
  useSelectFriend,
} from "@Redux";

export const Img = styled(GameImg)`
  width: 88px;
  height: 126px;
  border: blue solid 1px;
  padding: 8px;
  align-self: center;
`;

const WhoOwnsThisDiv = styled.div`
  padding: 16px 32px;
  border: blue solid 1px;
  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
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

interface Props {}

const FriendName: FC<{ friendId: string }> = ({ friendId }) => {
  const { name } = useSelectFriend(friendId);
  return <Text>{name}</Text>;
};

const GameDetailsRouteFC: FC<Props> = ({}) => {
  const { gameId } = useParams<{ gameId: string }>();
  const { imageUrl, name, minPlayers, maxPlayers, isOnGamePass } = useSelectGame(gameId);
  const friendIds = useSelectCurrentFriendIdsThatOwnGame(gameId);
  return (
    <Page header="GAME LIBRARY">
      <Img src={imageUrl} />
      <GameDiv>
        <Heading>{name}</Heading>
        <Text>{`Players: ${minPlayers}-${maxPlayers}`}</Text>
        <Text>{`Game Pass: ${isOnGamePass ? `Yup` : `Nope`}`}</Text>
      </GameDiv>
      <WhoOwnsThisDiv>
        <Heading>Who owns this</Heading>
        {friendIds.map((friendId) => (
          <FriendName friendId={friendId} />
        ))}
      </WhoOwnsThisDiv>
      <EditLink>Edit</EditLink>
      <DeleteLink>Delete</DeleteLink>
    </Page>
  );
};

export const GameDetailsRoute = GameDetailsRouteFC;
