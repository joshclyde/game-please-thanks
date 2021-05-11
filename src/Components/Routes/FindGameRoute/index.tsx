import React, { FC, useState, useEffect, useCallback } from "react";
import styled from "styled-components";

import { Page, Heading, ListOfGames, Text } from "@Common";
import {
  useSelectCurrentFriendIds,
  useSelectAllFriends,
  useSelectAllGames,
} from "@Redux";

interface Props {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Section = styled.div`
  width: 100%;
`;

const Div = styled.div`
  margin-bottom: 16px;
`;

const Input = styled.input<{ checked: boolean }>`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: ${({ checked }) => (checked ? `#0FF1FF solid 4px` : `#cccccc solid 2px`)};
  width: 16px;
  height: 16px;
  margin: 0px;
  margin-right: 24px;
`;

const Label = styled.label<{ checked: boolean }>`
  color: ${({ checked }) => (checked ? `#0FF1FF` : `#cccccc`)};
  font-size: 1em;
  margin: 0px;
`;

const FindGameRouteFC: FC<Props> = ({}) => {
  const games = useSelectAllGames();
  const friends = useSelectAllFriends();
  const friendIds = useSelectCurrentFriendIds();
  const [checkedState, setCheckedState] = useState<Record<string, boolean>>({});
  useEffect(() => {
    friendIds.forEach((friendId) =>
      setCheckedState((prev) => ({ ...prev, [friendId]: prev[friendId] || false })),
    );
  }, [friendIds, setCheckedState]);
  const onClickCheck = useCallback(
    (friendId) => {
      setCheckedState((prev) => ({ ...prev, [friendId]: !Boolean(prev[friendId]) }));
    },
    [setCheckedState],
  );
  const checkedFriendIds = Object.keys(checkedState).filter(
    (friendId) => checkedState[friendId],
  );

  const filteredGameIds = Object.values(games)
    .filter((game) => {
      if (game.minPlayers > checkedFriendIds.length) {
        return false;
      }
      if (game.maxPlayers < checkedFriendIds.length) {
        return false;
      }
      if (
        checkedFriendIds.find((friendId) => {
          const friend = friends[friendId];
          return !friend.gamesOwned?.includes(game.id);
        })
      ) {
        return false;
      }
      return true;
    })
    .map(({ id }) => id);

  return (
    <Page header="FIND GAME">
      <Container>
        <Section>
          <Heading>Friends playing</Heading>
          {friendIds.map((friendId) => (
            <Div>
              <Input
                type="checkbox"
                id={friendId}
                name={friendId}
                checked={checkedState[friendId]}
                onChange={() => onClickCheck(friendId)}
              />
              <Label htmlFor={friendId} checked={checkedState[friendId]}>
                {friends[friendId]?.name}
              </Label>
            </Div>
          ))}
        </Section>
        <Section>
          <Heading>Games you can play</Heading>
          <ListOfGames gameIds={filteredGameIds} />
          {checkedFriendIds.length === 0 ? (
            <Text>You have no friends selected.</Text>
          ) : null}
          {checkedFriendIds.length != 0 && filteredGameIds.length === 0 ? (
            <Text>There are no games available to play.</Text>
          ) : null}
        </Section>
      </Container>
    </Page>
  );
};

export const FindGameRoute = FindGameRouteFC;
