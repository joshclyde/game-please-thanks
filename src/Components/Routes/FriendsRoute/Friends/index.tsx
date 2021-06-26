import _ from "lodash";
import React, { FC } from "react";
import styled from "styled-components";

import { Link, Heading, BigText } from "@Common";
import {
  useSelectAuthUidAndFriendsIdsSorted,
  useSelectUser,
  useSelectUserNameMaybeYou,
} from "@Redux";

interface Props {}

const Grid = styled.div`
  display: grid;
  width: 100%;
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
  const { games, hasGamePass } = useSelectUser(friendId);
  const name = useSelectUserNameMaybeYou(friendId);
  const numOfGamesowned = Object.keys(_.pickBy(games, (game) => game.isOwned)).length;

  return (
    <>
      <Cell column="1" row={row}>
        <Link to={`/friends/${friendId}`}>{name}</Link>
      </Cell>
      <Cell column="2" row={row} textAlign="center" as={BigText}>
        {numOfGamesowned || 0}
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
  const friendIds = useSelectAuthUidAndFriendsIdsSorted();
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
      {friendIds
        ? friendIds.map((friendId, index) => (
            <FriendRow key={friendId} friendId={friendId} row={`${index + 2}`} />
          ))
        : null}
    </Grid>
  );
};

export const Friends = FriendsFC;
