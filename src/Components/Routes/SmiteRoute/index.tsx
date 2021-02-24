import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import { Header } from "@Common";
import { GodsList, GodPage } from "@Domain";

const Container = styled.div`
  padding: 32px;
`;

const SmiteRouteFC: FC<{}> = () => {
  return (
    <div>
      <Header />
      <Container>
        <Switch>
          <Route path="/smite/gods" exact={true}>
            <GodsList />
          </Route>
          <Route path="/smite/gods/:godName">
            <GodPage />
          </Route>
        </Switch>
      </Container>
    </div>
  );
};

export const SmiteRoute = SmiteRouteFC;
