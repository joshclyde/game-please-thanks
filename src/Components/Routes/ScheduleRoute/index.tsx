import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";

import { Header } from "@Common";

import { AddEventPage } from "./AddEventPage";
import { DisplayModeRoute } from "./DisplayModeRoute";
import { EditScheduleRoute } from "./EditScheduleRoute";

const ScheduleRouteFC: FC<{}> = () => {
  return (
    <div>
      <Header />
      <div>
        <Switch>
          <Route path="/schedule" exact={true}>
            <DisplayModeRoute />
          </Route>
          <Route path="/schedule/edit">
            <EditScheduleRoute />
          </Route>
          <Route path="/schedule/add">
            <AddEventPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export const ScheduleRoute = ScheduleRouteFC;
