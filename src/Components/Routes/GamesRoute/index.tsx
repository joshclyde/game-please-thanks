import React, { FC } from "react";
import styled from "styled-components";

import { Link, Page, ListOfGames } from "@Common";
import { useSelectAllGameIds } from "@Redux";

const StyledLink = styled(Link)`
  margin-top: 32px;
`;

const AddGameDiv = styled.div`
  width: 100%;
`;

const Games: FC<{}> = () => {
  const gameIds = useSelectAllGameIds();
  return <ListOfGames gameIds={gameIds} />;
};

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
