import React, { FC } from "react";
import styled from "styled-components";

import { useGame } from "@State";

const Img = styled.img`
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
`;

interface Props {
  className?: string;
  gameId: string;
}

export const GameImg: FC<Props> = ({ className, gameId }) => {
  const game = useGame(gameId);

  return <Img src={game.images.TitledSquare.url} className={className} />;
  // return <Img src={`/assets/productImage/${gameId}.jpeg`} className={className} />;
};
