import React, { FC } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { GameImg, LinkExternal, List, Page, Text } from "@Common";
import {
  useUsersNameMaybeYou,
  useGame,
  useCurrentUserAndFriendIdsThatOwnGame,
  useIsAuthenticated,
  useGameSizeHumanReadable,
} from "@State";
import { getPlayersText, COLORS } from "@Utils";

import { UserDataForGameCheckbox } from "./UserDataForGameCheckbox";

const Img = styled(GameImg)`
  width: 128px;
  height: 128px;
  border: ${COLORS.BLUE} solid 1px;
  padding: 8px;
  align-self: center;
`;

const GameList = styled(List)`
  margin-top: 16px;
`;

const FriendName: FC<{ friendId: string }> = ({ friendId }) => {
  const name = useUsersNameMaybeYou(friendId);
  return <Text>{name}</Text>;
};

const GameEntityRouteFC: FC<{}> = () => {
  const params = useParams<{ gameId: string }>();
  const gameId = params.gameId as string;
  const { name, minPlayers, maxPlayers, isOnGamePass, price, externalUrl } = useGame(
    gameId,
  );
  const friendIds = useCurrentUserAndFriendIdsThatOwnGame(gameId);
  const isAuthenticated = useIsAuthenticated();
  const size = useGameSizeHumanReadable(gameId);

  return (
    <Page header="GAMES">
      <Img gameId={gameId} />
      <GameList header={name}>
        <Text>{getPlayersText(minPlayers, maxPlayers)}</Text>
        <Text>
          Additional details at{` `}
          <LinkExternal to={externalUrl}>microsoft.com</LinkExternal>
        </Text>
        {isOnGamePass ? <Text>Available through game pass</Text> : null}
        <Text>{price === 0 ? `This game is free.` : `Buy for \$${price}.`}</Text>
        <Text>{size}</Text>
      </GameList>
      {isAuthenticated ? (
        <List header="Who owns this">
          {friendIds.length > 0 ? (
            friendIds.map((friendId) => <FriendName key={friendId} friendId={friendId} />)
          ) : (
            <Text>No friends own {name}</Text>
          )}
          <UserDataForGameCheckbox gameId={gameId} attribute="isOwned" />
          <UserDataForGameCheckbox gameId={gameId} attribute="isInstalled" />
        </List>
      ) : null}
    </Page>
  );
};

export const GameEntityRoute = GameEntityRouteFC;
