import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";

import { GameOverviewRoute } from "./GameOverviewRoute";
import { ViewGamesRoute } from "./ViewGamesRoute";

const GameLibraryRouteFC: FC<{}> = () => {
  return (
    <Switch>
      <Route path="/games/123">
        <GameOverviewRoute
          src={`/assets/overwatch.jpg`}
          name={`Overwatch`}
          minPlayers={1}
          maxPlayers={6}
          isOnGamePass={false}
          whoOwnsThis={[`Bingle Bear`, `Josh`]}
        />
      </Route>
      <Route path="/games">
        <ViewGamesRoute />
      </Route>
    </Switch>
  );
};

export const GameLibraryRoute = GameLibraryRouteFC;
