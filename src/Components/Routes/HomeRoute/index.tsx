import React, { FC } from "react";

import { LinkFancy, RoutesMenu } from "@Common";
import { useIsAuthenticated } from "@State";

import { LoginLink } from "./LoginLink";
import { LogoutLink } from "./LogoutLink";

const HomeRouteFC: FC<{}> = () => {
  const isAuthenticated = useIsAuthenticated();
  return (
    <RoutesMenu>
      <LinkFancy to="/games">Game Library</LinkFancy>
      {isAuthenticated ? <LinkFancy to="/find">Find Game</LinkFancy> : null}
      {isAuthenticated ? <LinkFancy to="/friends">Friends</LinkFancy> : null}
      {/* <LinkFancy to="/settings">Settings</LinkFancy> */}
      {isAuthenticated ? <LinkFancy to="/profile">Profile</LinkFancy> : null}
      {!isAuthenticated ? <LoginLink /> : null}
      {isAuthenticated ? <LogoutLink /> : null}
    </RoutesMenu>
  );
};

export const HomeRoute = HomeRouteFC;
