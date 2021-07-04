import React, { FC } from "react";

import { Page } from "@Common";
import { TwoColumn } from "@Design";

import { SearchForm } from "./SearchForm";
import { Users } from "./Users";

const UsersRouteFC: FC<{}> = () => {
  return (
    <Page header="USERS">
      <TwoColumn>
        <SearchForm />
        <Users />
      </TwoColumn>
    </Page>
  );
};

export const UsersRoute = UsersRouteFC;
