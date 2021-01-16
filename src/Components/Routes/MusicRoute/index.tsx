import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";

import { Header } from "@Common";

import { POCDevices } from "./POCDevices";
import { POCPlayer } from "./POCPlayer";
import { POCSearchRoute } from "./POCSearchRoute";
import { RootRoute } from "./RootRoute";
import { SpotifyAuthRedirect } from "./SpotifyAuthRedirect";

const MusicRouteFC: FC<{}> = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/music/spotify-auth-redirect">
          <SpotifyAuthRedirect />
        </Route>
        <Route path="/music/search">
          <POCSearchRoute />
        </Route>
        <Route path="/music/devices">
          <POCDevices />
        </Route>
        <Route path="/music/player">
          <POCPlayer />
        </Route>
        <Route path="/music">
          <RootRoute />
        </Route>
      </Switch>
    </div>
  );
};

export const MusicRoute = MusicRouteFC;
