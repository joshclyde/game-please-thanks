import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";

import { Header } from "@Common";
import { GodsList, GodPage } from "@Domain";

import "./index.css";

const SmiteRouteFC: FC<{}> = () => {
  return (
    <div>
      <Header />
      <div className="SmiteRoute">
        <Switch>
          <Route path="/smite/gods" exact={true}>
            <GodsList />
          </Route>
          <Route path="/smite/gods/:godName">
            <GodPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export const SmiteRoute = SmiteRouteFC;
