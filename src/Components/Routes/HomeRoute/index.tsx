import React, { FC } from "react";
import styled from "styled-components";

import { Link, Logo } from "@Common";

const StyledLogo = styled(Logo)`
  align-self: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  max-width: 280px;
  padding: 0px 32px;

  & > *:not(:last-child) {
    margin-bottom: 32px;
  }
`;

const HomeRouteFC: FC<{}> = () => {
  return (
    <Div>
      <StyledLogo width="128" height="128" />
      <Link to="/find">Find Game</Link>
      <Link to="/games">Game Library</Link>
      <Link to="/friends">Friends</Link>
      <Link to="/settings">Settings</Link>
    </Div>
  );
};

export const HomeRoute = HomeRouteFC;
