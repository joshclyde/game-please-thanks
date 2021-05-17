import React, { FC } from "react";
import styled from "styled-components";

const Img = styled.img`
  image-rendering: pixelated;
`;

interface Props {
  className?: string;
  gameId: string;
}

export const GameImg: FC<Props> = ({ className, gameId }) => {
  return (
    <Img
      src={`https://firebasestorage.googleapis.com/v0/b/game-please-thanks.appspot.com/o/game-images%2F${gameId}.jpeg?alt=media`}
      className={className}
    />
  );
};
