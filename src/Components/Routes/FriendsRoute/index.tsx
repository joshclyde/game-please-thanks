import React, { FC } from "react";

import { Page } from "@Common";

import { Friends } from "./Friends";

const FriendsRouteFC: FC<{}> = () => {
  return (
    <Page header="FRIENDS">
      <Friends />
    </Page>
  );
};

export const FriendsRoute = FriendsRouteFC;
