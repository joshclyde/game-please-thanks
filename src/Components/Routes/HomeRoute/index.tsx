import React, { FC } from "react";

import { LinkFancy, RoutesMenu } from "@Common";
import { useSelectIsAuthenticated } from "@Redux";

import { LoginLink } from "./LoginLink";
import { LogoutLink } from "./LogoutLink";

const HomeRouteFC: FC<{}> = () => {
  const isAuthenticated = useSelectIsAuthenticated();
  return (
    <RoutesMenu>
      {!isAuthenticated ? <LoginLink /> : null}
      {isAuthenticated ? <LinkFancy to="/find">Find Game</LinkFancy> : null}
      <LinkFancy to="/games">Game Library</LinkFancy>
      {isAuthenticated ? <LinkFancy to="/friends">Friends</LinkFancy> : null}
      {/* <LinkFancy to="/settings">Settings</LinkFancy> */}
      {isAuthenticated ? <LogoutLink /> : null}
    </RoutesMenu>
  );
};

export const HomeRoute = HomeRouteFC;
