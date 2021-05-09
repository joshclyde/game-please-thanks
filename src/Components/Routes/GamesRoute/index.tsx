import React, { FC } from "react";
import styled from "styled-components";

import { Link, Page } from "@Common";

import { Games } from "./Games";

const StyledLink = styled(Link)`
  margin-top: 32px;
`;

const AddGameDiv = styled.div`
  width: 100%;
`;

const GamesRouteFC: FC<{}> = () => {
  return (
    <Page header="GAME LIBRARY">
      <Games />
      <AddGameDiv>
        <StyledLink to="/games/create">Add Game</StyledLink>
      </AddGameDiv>
    </Page>
  );
};

export const GamesRoute = GamesRouteFC;
