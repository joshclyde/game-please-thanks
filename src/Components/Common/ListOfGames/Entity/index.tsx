import React, { FC } from "react";
import styled from "styled-components";

import { Link, Text, GameImg } from "@Common";
import { useSelectGame } from "@Redux";

// TODO: cache these images
export const Img = styled(GameImg)`
  width: 44px;
  height: 63px;
`;

const Div = styled.div`
  display: flex;
  border: blue solid 1px;
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
  const { id, name, minPlayers, maxPlayers } = useSelectGame(gameId);
  return (
    <Div>
      <Img
        src={`https://firebasestorage.googleapis.com/v0/b/game-please-thanks.appspot.com/o/game-images%2F${gameId}.jpeg?alt=media`}
      />
      <Div2>
        <Link to={`/games/${id}`}>{name}</Link>
        <StyledText>{`Players: ${minPlayers}-${maxPlayers}`}</StyledText>
      </Div2>
    </Div>
  );
};

export const Entity = EntityFC;
