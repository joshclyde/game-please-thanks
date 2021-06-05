import React, { FC } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { GameImg, LinkExternal, List, Page, Text } from "@Common";
import {
  useSelectCurrentFriendIdsThatOwnGame,
  useSelectExternalUrl,
  useSelectFriend,
  useSelectGame,
} from "@Redux";
import { getPlayersText } from "@Utils";

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

interface Props {}

const FriendName: FC<{ friendId: string }> = ({ friendId }) => {
  const { name } = useSelectFriend(friendId);
  return <Text>{name}</Text>;
};

const GameEntityRouteFC: FC<Props> = ({}) => {
  const { gameId } = useParams<{ gameId: string }>();
  const { name, minPlayers, maxPlayers, isOnGamePass, price } = useSelectGame(gameId);
  const friendIds = useSelectCurrentFriendIdsThatOwnGame(gameId);
  const externalUrl = useSelectExternalUrl(gameId);
  return (
    <Page header="GAME LIBRARY">
      <Img gameId={gameId} />
      <GameList
        header={name}
        list={[
          `${getPlayersText(minPlayers, maxPlayers)}`,
          <>
            Additional details at{` `}
            <LinkExternal to={externalUrl}>microsoft.com</LinkExternal>.
          </>,
          isOnGamePass ? `Available through Game Pass.` : null,
          price === 0 ? `This game is FREE.` : `Buy for \$${price}.`,
        ]}
      />
      <List header="Who owns this">
        {friendIds.length > 0 ? (
          friendIds.map((friendId) => <FriendName friendId={friendId} />)
        ) : (
          <Text>Sorry, no friends own {name}.</Text>
        )}
      </List>
    </Page>
  );
};

export const GameEntityRoute = GameEntityRouteFC;
