import React, { FC } from "react";
import styled from "styled-components";

import { Heading, ListOfGames, Page, Text } from "@Common";
import { TwoColumn } from "@Design";
import { useUnmountEffect } from "@Hooks";
import { useDeleteFormOnUnmount } from "@Redux";

import { FriendCheckboxes } from "./FriendCheckboxes";
import { useGameIds, useCheckedFriendsIds } from "./hooks";

const Section = styled.div`
  width: 100%;
`;

const FindGameRouteFC: FC<{}> = ({}) => {
  const gameIds = useGameIds();
  const friendIds = useCheckedFriendsIds();
  useDeleteFormOnUnmount(`FIND_GAME_ROUTE`);

  useUnmountEffect(() => {});

  return (
    <Page header="FIND GAME">
      <TwoColumn>
        <Section>
          <Heading>Friends playing</Heading>
          <FriendCheckboxes />
        </Section>
        <Section>
          <Heading>Games you can play</Heading>
          <ListOfGames gameIds={gameIds} />
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
