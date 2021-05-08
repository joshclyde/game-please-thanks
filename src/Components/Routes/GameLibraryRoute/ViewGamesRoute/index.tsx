import React, { FC } from "react";
import styled from "styled-components";

import { Link, PageHeader, IconHomeLink } from "@Common";

import { Games } from "./Games";

const StyledLink = styled(Link)`
  margin-top: 32px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  max-width: 512px;
  margin-right: auto;
  margin-left: auto;
  height: 100%;
`;

const AddGameDiv = styled.div`
  width: 100%;
`;

const BottomIcons = styled.div`
  position: absolute;
  bottom: 0px;
  margin-bottom: 32px;
`;

const ViewGamesRouteFC: FC<{}> = () => {
  return (
    <>
      <Div>
        <PageHeader>GAME LIBRARY</PageHeader>
        <Games />
        <AddGameDiv>
          <StyledLink to="/games/create">Add Game</StyledLink>
        </AddGameDiv>
        <BottomIcons>
          <IconHomeLink />
        </BottomIcons>
      </Div>
    </>
  );
};

export const ViewGamesRoute = ViewGamesRouteFC;
