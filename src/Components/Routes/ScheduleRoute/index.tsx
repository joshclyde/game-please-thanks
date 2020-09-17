import { Header } from "@Common";
import { Route, Switch } from "react-router-dom";
import React, { FC } from "react";
import { AddEventPage } from "./AddEventPage";
import { EditScheduleRoute } from "./EditScheduleRoute";
import { DisplayModeRoute } from "./DisplayModeRoute";

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
