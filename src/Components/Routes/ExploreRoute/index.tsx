import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";

import { Header } from "@Common";

import { RootRoute } from "./RootRoute";

const ExploreRouteFC: FC<{}> = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/explore">
          <RootRoute />
        </Route>
      </Switch>
    </div>
  );
};

export const ExploreRoute = ExploreRouteFC;
