import React, { FC, useRef } from "react";
import styled from "styled-components";

import { Link, List, Page, Text, Heading } from "@Common";
import { useSelectAuthHasGamePass, useSelectAuthName } from "@Redux";

import { Games } from "./Games";

const EditLink = styled(Link)`
  margin-top: 16px;
  display: block;
`;

const StyledList = styled(List)`
  margin-bottom: 32px;
`;

const ProfileRouteFC: FC<{}> = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const hasGamePass = useSelectAuthHasGamePass();
  const name = useSelectAuthName();

  return (
    <Page header="PROFILE">
      <StyledList header={name || ``}>
        <Text>Game Pass: {hasGamePass ? `Yes` : `No`}</Text>
        <EditLink to="/profile/edit">Edit</EditLink>
      </StyledList>
      <Heading ref={scrollRef}>Games Owned</Heading>
      <Games scrollRef={scrollRef} />
    </Page>
  );
};

export const ProfileRoute = ProfileRouteFC;
