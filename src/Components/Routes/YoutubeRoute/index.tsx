import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";

import { Header } from "@Common";

import { RootRoute } from "./RootRoute";

const YoutubeRouteFC: FC<{}> = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/youtube">
          <RootRoute />
        </Route>
      </Switch>
    </div>
  );
};

export const YoutubeRoute = YoutubeRouteFC;
