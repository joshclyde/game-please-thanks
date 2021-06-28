import React, { FC, useRef } from "react";
import styled from "styled-components";

import { Heading, Page, Text, ListOfGamesPaginated } from "@Common";
import { TwoColumn } from "@Design";
import { useDeleteFormOnUnmount } from "@Redux";

import { useGameIds, useCheckedFriendsIds } from "./hooks";
import { UserCheckboxes } from "./UserCheckboxes";

const Section = styled.div`
  width: 100%;
`;

const FindGameRouteFC: FC<{}> = ({}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const gameIds = useGameIds();
  const friendIds = useCheckedFriendsIds();
  useDeleteFormOnUnmount(`FIND_GAME_ROUTE`);

  return (
    <Page header="FIND GAME">
      <TwoColumn>
        <Section>
          <Heading>Friends playing</Heading>
          <UserCheckboxes />
        </Section>
        <Section>
          <Heading ref={scrollRef}>Games you can play</Heading>
          <ListOfGamesPaginated gameIds={gameIds} scrollRef={scrollRef} />
          {friendIds.length === 0 ? <Text>You have no friends selected.</Text> : null}
          {friendIds.length != 0 && gameIds.length === 0 ? (
            <Text>There are no games available to play.</Text>
          ) : null}
        </Section>
      </TwoColumn>
    </Page>
  );
};

export const FindGameRoute = FindGameRouteFC;
