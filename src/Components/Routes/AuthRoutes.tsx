import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import { useOnce } from "@Hooks";
import {
  useLoadGames,
  useSelectDidGamesLoadSucceed,
  useSelectIsAuthenticated,
  useAuthListener,
} from "@Redux";

import { EditProfileRoute } from "./EditProfileRoute";
import { FindGameRoute } from "./FindGameRoute";
import { FriendEntityRoute } from "./FriendEntityRoute";
import { FriendsRoute } from "./FriendsRoute";
import { GameEntityRoute } from "./GameEntityRoute";
import { GamesRoute } from "./GamesRoute";
import { HomeRoute } from "./HomeRoute";
import { LoadingRoute } from "./LoadingRoute";
import { ProfileRoute } from "./ProfileRoute";
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
  useAuthListener();
  const isAuthenticated = useSelectIsAuthenticated();

  const load = useLoadGames();
  useOnce(() => {
    load();
  });
  // TODO: change waiting for games to load to be within routes instead
  const didGamesLoad = useSelectDidGamesLoadSucceed();

  if (!didGamesLoad || isAuthenticated == null) {
    return (
      <Div>
        <Switch>
          {/* only show the logo if we're for sure on the home page */}
          <Route exact={true} path="/" component={LoadingRoute} />
        </Switch>
      </Div>
    );
  }

  return (
    <Div>
      <Switch>
        <Route path="/games/:gameId" component={GameEntityRoute} />
        <Route path="/games" component={GamesRoute} />
        <Route path="/friends/:friendId" component={FriendEntityRoute} />
        <Route path="/friends" component={FriendsRoute} />
        <Route path="/find" component={FindGameRoute} />
        <Route path="/settings" component={SettingsRoute} />
        <Route path="/profile/edit" component={EditProfileRoute} />
        <Route path="/profile" component={ProfileRoute} />
        <Route path="/" component={HomeRoute} />
      </Switch>
    </Div>
  );
};

export const AuthRoutes = AuthRoutesFC;
