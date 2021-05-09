import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import { signInUserThroughGoogle } from "@Firebase";
import { useSelectIsAuthenticated, useAuthListener } from "@Redux";

import { GameDetailsRoute } from "./GameDetailsRoute";
import { GamesRoute } from "./GamesRoute";
import { HomeRoute } from "./HomeRoute";

const Div = styled.div`
  margin: 15px;
  border: #ecff0f solid 1px;

  width: calc(100vw - 32px);
  min-height: calc(100vh - 32px);
`;

const AuthRoutesFC: FC<{}> = () => {
  useAuthListener();
  const isAuthenticated = useSelectIsAuthenticated();
  return (
    <Div>
      {isAuthenticated ? (
        <Switch>
          <Route path="/games/123">
            <GameDetailsRoute
              src={`/assets/overwatch.jpg`}
              name={`Overwatch`}
              minPlayers={1}
              maxPlayers={6}
              isOnGamePass={false}
              whoOwnsThis={[`Bingle Bear`, `Josh`]}
            />
          </Route>
          <Route path="/games" component={GamesRoute} />
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
