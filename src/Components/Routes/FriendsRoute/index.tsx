import React, { FC } from "react";
import styled from "styled-components";

import { Link, Page } from "@Common";

import { Friends } from "./Friends";

const StyledLink = styled(Link)`
  margin-top: 32px;
`;

const FriendsRouteFC: FC<{}> = () => {
  return (
    <Page header="FRIENDS">
      <Friends />
      <StyledLink to="/friends/create">Add Friend</StyledLink>
    </Page>
  );
};

export const FriendsRoute = FriendsRouteFC;
