import React, { FC } from "react";
import styled from "styled-components";

import { Link, Heading, BigText } from "@Common";
import { useSelectCurrentFriendIds, useSelectFriend } from "@Redux";

interface Props {}

const Grid = styled.div`
  display: grid;
  margin: 0px 32px 32px 32px;
  align-self: center;
  gap: 16px 32px;
  @media (max-width: 400px) {
    & > *:nth-child(3n) {
      display: none;
    }
  }
`;

const Cell = styled.div<{ column: string; row: string; textAlign?: string }>`
  grid-column: ${({ column }) => column};
  grid-row: ${({ row }) => row};
  text-align: ${({ textAlign }) => textAlign};
`;

const FriendRow: FC<{ friendId: string; row: string }> = ({ friendId, row }) => {
  const { name, gamesOwned, hasGamePass } = useSelectFriend(friendId);

  return (
    <>
      <Cell column="1" row={row} as={Link} to={`/friends/${friendId}`}>
        {name}
      </Cell>
      <Cell column="2" row={row} textAlign="right" as={BigText}>
        {gamesOwned?.length || 0}
      </Cell>
      <Cell column="3" row={row} textAlign="center" as={BigText}>
        {hasGamePass ? `Yes` : `No`}
      </Cell>
    </>
  );
};

/*
  TODOs
  - don't use grid?
  - change Link to not be weird with it's alignment
*/
const FriendsFC: FC<Props> = ({}) => {
  const friendIds = useSelectCurrentFriendIds();
  return (
    <Grid>
      <Cell column="1" row="1" textAlign="left" as={Heading}>
        NAME
      </Cell>
      <Cell column="2" row="1" textAlign="center" as={Heading}>
        GAMES
      </Cell>
      <Cell column="3" row="1" textAlign="center" as={Heading}>
        GAME PASS
      </Cell>
      {friendIds.map((friendId, index) => (
        <FriendRow key={friendId} friendId={friendId} row={`${index + 2}`} />
      ))}
    </Grid>
  );
};

export const Friends = FriendsFC;
