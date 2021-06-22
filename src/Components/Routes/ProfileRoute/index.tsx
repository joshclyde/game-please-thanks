import React, { FC } from "react";
import styled from "styled-components";

import { Link, List, Page, Text, Heading } from "@Common";
import { useSelectHasGamePass, useSelectName } from "@Redux";

import { Games } from "./Games";

const EditLink = styled(Link)`
  margin-top: 16px;
  display: block;
`;

const StyledList = styled(List)`
  margin-bottom: 32px;
`;

const ProfileRouteFC: FC<{}> = () => {
  const hasGamePass = useSelectHasGamePass();
  const name = useSelectName();

  return (
    <Page header="PROFILE">
      <StyledList header={name || ``}>
        <Text>Game Pass: {hasGamePass ? `Yes` : `No`}</Text>
        <EditLink to="/profile/edit">Edit</EditLink>
      </StyledList>
      <Heading>Games Owned</Heading>
      <Games />
    </Page>
  );
};

export const ProfileRoute = ProfileRouteFC;
