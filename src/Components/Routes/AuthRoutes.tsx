import React, { FC } from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { selectIsAuthenticated, State } from "@Redux";

import { BookmarksRoute } from "./BookmarksRoute";
import { FlashcardsRoute } from "./FlashcardsRoute";
import { SmiteRoute } from "./SmiteRoute";
import { ScheduleRoute } from "./ScheduleRoute";
import { AuthListener } from "./AuthListener";

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
