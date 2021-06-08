import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import { useOnce } from "@Hooks";
import {
  useLoadAuthentication,
  useLoadGames,
  useSelectDidGamesLoadSucceed,
  useSelectDidAuthenticationLoadSucceed,
  useSelectDidAuthenticationLoadFail,
} from "@Redux";

import { FindGameRoute } from "./FindGameRoute";
import { FriendDetailsRoute } from "./FriendDetailsRoute";
import { FriendsRoute } from "./FriendsRoute";
import { GameEntityRoute } from "./GameEntityRoute";
import { GamesRoute } from "./GamesRoute";
import { HomeRoute } from "./HomeRoute";
import { LoadingRoute } from "./LoadingRoute";
import { SettingsRoute } from "./SettingsRoute";

const Div = styled.div`
  margin: 15px;
  border: #ecff0f solid 1px;

  width: calc(100vw - 32px);
  min-height: calc(100vh - 64px);
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AuthRoutesFC: FC<{}> = () => {
  const loadAuthentication = useLoadAuthentication();
  useOnce(() => {
    loadAuthentication();
  });
  const isAuthLoadSuccessful = useSelectDidAuthenticationLoadSucceed();
  const isAuthLoadFail = useSelectDidAuthenticationLoadFail();
  const isAuthLoading = !isAuthLoadSuccessful && !isAuthLoadFail;

  const load = useLoadGames();
  useOnce(() => {
    load();
  });
  // TODO: change waiting for games to load to be within routes instead
  const didGamesLoad = useSelectDidGamesLoadSucceed();

  if (!didGamesLoad || isAuthLoading) {
    return (
      <Div>
        <LoadingRoute />
      </Div>
    );
  }

  return (
    <Div>
      <Switch>
        <Route path="/games/:gameId" component={GameEntityRoute} />
        <Route path="/games" component={GamesRoute} />
        <Route path="/friends/:friendId" component={FriendDetailsRoute} />
        <Route path="/friends" component={FriendsRoute} />
        <Route path="/find" component={FindGameRoute} />
        <Route path="/settings" component={SettingsRoute} />
        <Route path="/" component={HomeRoute} />
      </Switch>
    </Div>
  );
};

export const AuthRoutes = AuthRoutesFC;
