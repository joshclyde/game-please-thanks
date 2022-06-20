import React, { FC } from "react";
import styled from "styled-components";

const Img = styled.img`
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
`;

interface Props {
  className?: string;
  gameId: string;
}

export const GameImg: FC<Props> = ({ className, gameId }) => {
  return <Img src={`/assets/images/${gameId}.jpeg`} className={className} />;
};
