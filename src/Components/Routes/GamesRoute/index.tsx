import React, { FC } from "react";

import { Page } from "@Common";
import { TwoColumn } from "@Design";

import { Games } from "./Games";
import { SearchForm } from "./SearchForm";

const GamesRouteFC: FC<{}> = () => {
  return (
    <Page header="GAME LIBRARY">
      <TwoColumn>
        <SearchForm />
        <Games />
      </TwoColumn>
    </Page>
  );
};

export const GamesRoute = GamesRouteFC;
