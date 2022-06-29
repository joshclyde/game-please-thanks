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

const priceText = (price: number, gamePass: boolean) => {
  const priceString = price === 0 ? `FREE` : `\$${price}`;
  return gamePass ? `GAME PASS (or ${priceString})` : priceString;
};

const GameEntityRouteFC: FC<{}> = () => {
  const params = useParams<{ gameId: string }>();
  const gameId = params.gameId as string;
  const {
    name,
    minPlayers,
    maxPlayers,
    isOnGamePass,
    price,
    externalUrl,
    rating,
    ratingCount,
    releaseDate,
  } = useGame(gameId);
  const friendIds = useCurrentUserAndFriendIdsThatOwnGame(gameId);
  const isAuthenticated = useIsAuthenticated();
  const size = useGameSizeHumanReadable(gameId);

  return (
    <Page header={name}>
      <Img gameId={gameId} />
      <GameList header="Details">
        <Text>{getPlayersText(minPlayers, maxPlayers)}</Text>
        <Text>{priceText(price, isOnGamePass)}</Text>
        <Text>{size}</Text>
        <Text>
          {rating}/5 ({ratingCount} reviews)
        </Text>
        <Text>Released {new Date(releaseDate).toISOString().substring(0, 10)}</Text>
        {isAuthenticated && (
          <>
            <UserDataForGameCheckbox gameId={gameId} attribute="isOwned" />
            <UserDataForGameCheckbox gameId={gameId} attribute="isInstalled" />
          </>
        )}
      </GameList>
      {isAuthenticated && (
        <List header="Friends">
          {friendIds.length > 0 ? (
            friendIds.map((friendId) => <FriendName key={friendId} friendId={friendId} />)
          ) : (
            <Text>No friends own {name}</Text>
          )}
        </List>
      )}
      <List>
        <Text>
          <LinkExternal to={externalUrl}>view at microsoft.com</LinkExternal>
        </Text>
      </List>
    </Page>
  );
};

export const GameEntityRoute = GameEntityRouteFC;
