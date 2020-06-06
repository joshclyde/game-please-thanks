import { Header } from "@Components/App/Header/Header";
import { Route, Switch } from "react-router-dom";
import React, { FC } from "react";
import { GodsList } from "./Gods/GodsList";
import { GodPage } from "./GodPage/GodPage";

const SmiteRouteFC: FC<{}> = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/smite/gods" exact={true}>
          <GodsList />
        </Route>
        <Route path="/smite/gods/:godName">
          <GodPage />
        </Route>
      </Switch>
    </div>
  );
};

export const SmiteRoute = SmiteRouteFC;
