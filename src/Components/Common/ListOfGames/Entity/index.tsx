import React, { FC } from "react";
import styled from "styled-components";

import { Link, Text, GameImg } from "@Common";
import { useGame, useGameSizeHumanReadable } from "@State";
import { getPlayersText, COLORS } from "@Utils";

const Img = styled(GameImg)`
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
  gameId: string;
}

const EntityFC: FC<Props> = ({ gameId }) => {
  const { id, name, minPlayers, maxPlayers } = useGame(gameId);
  const size = useGameSizeHumanReadable(gameId);
  return (
    <Div>
      <Img gameId={gameId} />
      <Div2>
        <Link to={`/games/${id}`}>{name}</Link>
        <StyledText>
          {getPlayersText(minPlayers, maxPlayers)} , {size}
        </StyledText>
      </Div2>
    </Div>
  );
};

export const Entity = EntityFC;
