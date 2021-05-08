import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";

import { Header } from "@Common";

import { RootRoute } from "./RootRoute";

const HomeRouteFC: FC<{}> = () => {
  return (
    <Switch>
      <Route path="/home">
        <RootRoute />
      </Route>
      <Route path="/">
        <RootRoute />
      </Route>
    </Switch>
  );
};

export const HomeRoute = HomeRouteFC;
