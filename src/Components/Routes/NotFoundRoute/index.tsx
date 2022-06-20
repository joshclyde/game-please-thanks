import React, { FC } from "react";

import { LinkFancy, RoutesMenu, Text } from "@Common";
import { useIsAuthenticated } from "@State";

const NotFoundRouteFC: FC<{}> = () => {
  const isAuthenticated = useIsAuthenticated();
  return (
    <RoutesMenu>
      <Text>
        {isAuthenticated
          ? `Sorry, the page you are looking for does not exist`
          : `Sorry, the page you are looking for either does not exist or you must be authenticated to view it`}
      </Text>
      <LinkFancy to="/">Home</LinkFancy>
    </RoutesMenu>
  );
};

export const NotFoundRoute = NotFoundRouteFC;
