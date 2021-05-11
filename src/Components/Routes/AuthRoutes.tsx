import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import { signInUserThroughGoogle } from "@Firebase";
import { useSelectIsAuthenticated, useAuthListener } from "@Redux";

import { FindGameRoute } from "./FindGameRoute";
import { FriendDetailsRoute } from "./FriendDetailsRoute";
import { FriendsRoute } from "./FriendsRoute";
import { GameDetailsRoute } from "./GameDetailsRoute";
import { GamesRoute } from "./GamesRoute";
import { HomeRoute } from "./HomeRoute";

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
  return (
    <Div>
      {isAuthenticated ? (
        <Switch>
          <Route path="/games/:gameId" component={GameDetailsRoute} />
          <Route path="/games" component={GamesRoute} />
          <Route path="/friends/:friendId" component={FriendDetailsRoute} />
          <Route path="/friends" component={FriendsRoute} />
          <Route path="/find" component={FindGameRoute} />
          <Route path="/" component={HomeRoute} />
        </Switch>
      ) : (
        <>
          <div>You are not yet authenticated</div>
          <button onClick={() => signInUserThroughGoogle()}>Sign In</button>
        </>
      )}
    </Div>
  );
};

export const AuthRoutes = AuthRoutesFC;
