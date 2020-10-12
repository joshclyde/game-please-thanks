import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";

import { Header } from "@Common";
import {
  signInUserThroughGoogle,
  getIsUserSignedIn,
  signOutUser,
  consoleLogCurrentUser,
} from "@Firebase";

const StatusRouteFC: FC<{}> = () => {
  return (
    <div>
      <Header />
      <div>
        <Switch>
          <Route path="/status">
            <div>
              <button onClick={signInUserThroughGoogle}>Sign In Through Google</button>
              <button onClick={getIsUserSignedIn}>Is User Signed In</button>
              <button onClick={consoleLogCurrentUser}>Console Log Current User</button>
              <button onClick={signOutUser}>Log Out</button>
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export const StatusRoute = StatusRouteFC;
