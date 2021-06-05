import React, { FC } from "react";
import styled from "styled-components";

import { LinkFancy, Logo } from "@Common";

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
      <LinkFancy to="/find">Find Game</LinkFancy>
      <LinkFancy to="/games">Game Library</LinkFancy>
      <LinkFancy to="/friends">Friends</LinkFancy>
      <LinkFancy to="/settings">Settings</LinkFancy>
    </Div>
  );
};

export const HomeRoute = HomeRouteFC;
