import React, { FC } from "react";
import styled from "styled-components";

import { Link, List, Page } from "@Common";
import { useSelectHasGamePass, useSelectName } from "@Redux";

const EditLink = styled(Link)`
  margin-top: 32px;
`;

const ProfileRouteFC: FC<{}> = () => {
  const hasGamePass = useSelectHasGamePass();
  const name = useSelectName();

  return (
    <Page header="PROFILE">
      <List header={name || ``} list={[`Game Pass: ${hasGamePass ? `Yes` : `No`}`]} />
      <EditLink to="/profile/edit">Edit</EditLink>
    </Page>
  );
};

export const ProfileRoute = ProfileRouteFC;
