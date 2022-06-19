import { useAtomValue } from "jotai";
import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import { useOnce } from "@Hooks";
import { useSelectIsAuthenticated, useAuthListener } from "@Redux";
import { useListenForAuth, useLoadGames as useLoadGamesJotai, usersAtom } from "@State";
import { COLORS } from "@Utils";

import { EditProfileRoute } from "./EditProfileRoute";
import { FindGameRoute } from "./FindGameRoute";
import { FriendsRoute } from "./FriendsRoute";
import { GameEntityRoute } from "./GameEntityRoute";
import { GamesRoute } from "./GamesRoute";
import { HomeRoute } from "./HomeRoute";
import { LoadingRoute } from "./LoadingRoute";
import { ProfileRoute } from "./ProfileRoute";
import { SettingsRoute } from "./SettingsRoute";
import { UserEntityRoute } from "./UserEntityRoute";
import { UsersRoute } from "./UsersRoute";

const Div = styled.div`
  margin: 15px;
  border: ${COLORS.YELLOW} solid 1px;

  width: calc(100vw - 32px);
  min-height: calc(100vh - 64px);
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AuthRoutesFC: FC<{}> = () => {
  useAuthListener();
  useListenForAuth();
  const isAuthenticated = useSelectIsAuthenticated();

  const users = useAtomValue(usersAtom);
  const gamesState = useLoadGamesJotai();

  if (isAuthenticated == null || gamesState != `hasData` || users.state != `hasData`) {
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
        <Route path="/users/:userId" component={UserEntityRoute} />
        <Route path="/users" component={UsersRoute} />
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
