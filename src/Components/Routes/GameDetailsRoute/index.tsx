import React, { FC } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Page, Link, Text, GameImg, RedLink, List } from "@Common";
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

const GameList = styled(List)`
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
  const { name, minPlayers, maxPlayers, isOnGamePass } = useSelectGame(gameId);
  const friendIds = useSelectCurrentFriendIdsThatOwnGame(gameId);
  return (
    <Page header="GAME LIBRARY">
      <Img gameId={gameId} />
      <GameList
        header={name}
        list={[
          `Players: ${minPlayers}-${maxPlayers}`,
          `Game Pass: ${isOnGamePass ? `Yup` : `Nope`}`,
        ]}
      />
      <List header="Who owns this">
        {friendIds.map((friendId) => (
          <FriendName friendId={friendId} />
        ))}
      </List>
    </Page>
  );
};

export const GameDetailsRoute = GameDetailsRouteFC;
