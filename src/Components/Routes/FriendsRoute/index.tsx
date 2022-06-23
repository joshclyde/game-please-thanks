import React, { FC } from "react";
import styled from "styled-components";

import { Page, Link } from "@Common";

import { Friends } from "./Friends";

const StyledAddFriendLink = styled(Link)`
  margin-top: 64px;
`;

const FriendsRouteFC: FC<{}> = () => {
  return (
    <Page header="FRIENDS">
      <Friends />
      <StyledAddFriendLink to="/users">Search for new friend</StyledAddFriendLink>
      <StyledAddFriendLink to="/find">Find game to play with friends</StyledAddFriendLink>
    </Page>
  );
};

export const FriendsRoute = FriendsRouteFC;
