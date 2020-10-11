import React, { FC } from "react";
import { Provider, connect, ConnectedProps } from "react-redux";
import { Route, Switch } from "react-router-dom";
import thunkMiddleware from "redux-thunk";

import { selectIsAuthenticated, State } from "@Redux";

import { AuthListener } from "./AuthListener";
import { BookmarksRoute } from "./BookmarksRoute";
import { FlashcardsRoute } from "./FlashcardsRoute";
import { ScheduleRoute } from "./ScheduleRoute";
import { SmiteRoute } from "./SmiteRoute";

const mapState = (state: State) => ({
  isAuthenticated: selectIsAuthenticated(state),
});

const connector = connect(mapState);

type AuthListenerProps = ConnectedProps<typeof connector> & {};

const AuthRoutesFC: FC<AuthListenerProps> = ({ isAuthenticated }) => (
  <>
    <AuthListener />
    {isAuthenticated ? (
      <Switch>
        <Route path="/flashcards" component={FlashcardsRoute} />
        <Route path="/bookmarks" component={BookmarksRoute} />
        <Route path="/smite" component={SmiteRoute} />
        <Route path="/schedule" component={ScheduleRoute} />
        <Route path="/" component={BookmarksRoute} />
        {/* <Route path="/" component={HomePage} /> */}
      </Switch>
    ) : (
      <div>You are not yet authenticated</div>
    )}
  </>
);

export const AuthRoutes = connector(AuthRoutesFC);
