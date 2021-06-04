import React, { FC } from "react";
import styled from "styled-components";

import { useSelectGameImage } from "@Redux";

const Img = styled.img`
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
`;

interface Props {
  className?: string;
  gameId: string;
}

export const GameImg: FC<Props> = ({ className, gameId }) => {
  const src = useSelectGameImage(gameId);
  return (
    <Img
      src={src}
      // src={`https://firebasestorage.googleapis.com/v0/b/game-please-thanks.appspot.com/o/game-images%2F${gameId}.jpeg?alt=media`}
      className={className}
    />
  );
};
