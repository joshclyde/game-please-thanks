import React, { FC } from "react";
import styled from "styled-components";

import { Link, Page } from "@Common";

import { Friends } from "./Friends";

const StyledLink = styled(Link)`
  margin-top: 32px;
`;

const AddFriendDiv = styled.div`
  width: 100%;
`;

const FriendsRouteFC: FC<{}> = () => {
  return (
    <Page header="FRIENDS">
      <Friends />
      <AddFriendDiv>
        <StyledLink to="/friends/create">Add Friend</StyledLink>
      </AddFriendDiv>
    </Page>
  );
};

export const FriendsRoute = FriendsRouteFC;
