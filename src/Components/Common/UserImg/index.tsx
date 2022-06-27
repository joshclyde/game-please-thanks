import React, { FC } from "react";
import styled from "styled-components";

const Img = styled.img`
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
`;

interface Props {
  className?: string;
  userId: string;
}

// For now, hardcoding the user id's to the image
const images: Record<string, string> = {
  amW6UtvQ4TehHNLd1ekEHpyt5sw1: `josh`,
  HFL71qZS6dYRV12gOw6OfotlkTr2: `ryan`,
};

export const UserImg: FC<Props> = ({ className, userId }) => {
  const imageUrl = images[userId]
    ? `/assets/profileImages/${images[userId]}.jpeg`
    : `/assets/profileImages/default.jpeg`;
  return <Img src={imageUrl} className={className} />;
};
