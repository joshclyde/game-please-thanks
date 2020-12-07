import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { signInUserThroughGoogle } from "@Firebase";
import { selectIsAuthenticated, State } from "@Redux";

import { AuthListener } from "./AuthListener";
import { BookmarksRoute } from "./BookmarksRoute";
import { FlashcardsRoute } from "./FlashcardsRoute";
import { MusicRoute } from "./MusicRoute";
import { ScheduleRoute } from "./ScheduleRoute";
import { SmiteRoute } from "./SmiteRoute";
import { StatusRoute } from "./StatusRoute";

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
        <Route path="/music" component={MusicRoute} />
        <Route path="/flashcards" component={FlashcardsRoute} />
        <Route path="/bookmarks" component={BookmarksRoute} />
        <Route path="/smite" component={SmiteRoute} />
        <Route path="/schedule" component={ScheduleRoute} />
        <Route path="/status" component={StatusRoute} />
        <Route path="/" component={BookmarksRoute} />
      </Switch>
    ) : (
      <>
        <div>You are not yet authenticated</div>
        <button onClick={() => signInUserThroughGoogle()}>Sign In</button>
      </>
    )}
  </>
);

export const AuthRoutes = connector(AuthRoutesFC);
