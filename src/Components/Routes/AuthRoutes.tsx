import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import { signInUserThroughGoogle } from "@Firebase";
import { useSelectIsAuthenticated, useAuthListener } from "@Redux";

import { GameLibraryRoute } from "./GameLibraryRoute";
import { HomeRoute } from "./HomeRoute";

const Div = styled.div`
  margin: 15px;
  border: #ecff0f solid 1px;

  position: absolute;
  top: 0px;
  left: 0px;
  width: calc(100vw - 30px);
  height: calc(100vh - 30px);
`;

const AuthRoutesFC: FC<{}> = () => {
  useAuthListener();
  const isAuthenticated = useSelectIsAuthenticated();
  return (
    <Div>
      {isAuthenticated ? (
        <Switch>
          <Route path="/games" component={GameLibraryRoute} />
          <Route path="/" component={HomeRoute} />
        </Switch>
      ) : (
        <>
          <div>You are not yet authenticated</div>
          <button onClick={() => signInUserThroughGoogle()}>Sign In</button>
        </>
      )}
      {/* <Div></Div> */}
    </Div>
  );
};

export const AuthRoutes = AuthRoutesFC;
