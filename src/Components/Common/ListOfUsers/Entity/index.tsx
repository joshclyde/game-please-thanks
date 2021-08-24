import React, { FC } from "react";
import styled from "styled-components";

import { Link, Text, UserImg } from "@Common";
import { useSelectUserName, useSelectUserGamesOwnedCount } from "@Redux";
import { getPlayersText, COLORS } from "@Utils";

// TODO: cache these images
const Img = styled(UserImg)`
  width: 64px;
  height: 64px;
`;

const Div = styled.div`
  display: flex;
  border: ${COLORS.BLUE} solid 1px;
  padding: 8px;
`;

const Div2 = styled.div`
  margin: 8px 0 0 16px;
`;

const StyledText = styled(Text)`
  margin: 16px 0 0 0;
`;

interface Props {
  userId: string;
}

// TODO: make this a common component (Game has something very similar)
const EntityFC: FC<Props> = ({ userId }) => {
  const name = useSelectUserName(userId);
  const gameCount = useSelectUserGamesOwnedCount(userId);
  return (
    <Div>
      <Img userId={userId} />
      <Div2>
        <Link to={`/users/${userId}`}>{name}</Link>
        <StyledText>Games: {gameCount}</StyledText>
      </Div2>
    </Div>
  );
};

export const Entity = EntityFC;
