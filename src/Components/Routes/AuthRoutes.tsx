import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";

import { signInUserThroughGoogle } from "@Firebase";
import { useSelectIsAuthenticated, useAuthListener } from "@Redux";

import { BookmarksRoute } from "./BookmarksRoute";
import { ExploreRoute } from "./ExploreRoute";
import { MusicRoute } from "./MusicRoute";
import { ScheduleRoute } from "./ScheduleRoute";
import { StatusRoute } from "./StatusRoute";
import { YoutubeRoute } from "./YoutubeRoute";

const AuthRoutesFC: FC<{}> = () => {
  useAuthListener();
  const isAuthenticated = useSelectIsAuthenticated();
  return (
    <>
      {isAuthenticated ? (
        <Switch>
          <Route path="/music" component={MusicRoute} />
          <Route path="/bookmarks" component={BookmarksRoute} />
          <Route path="/schedule" component={ScheduleRoute} />
          <Route path="/status" component={StatusRoute} />
          <Route path="/youtube" component={YoutubeRoute} />
          <Route path="/explore" component={ExploreRoute} />
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
};

export const AuthRoutes = AuthRoutesFC;
