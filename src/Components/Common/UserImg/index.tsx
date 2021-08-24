import React, { FC } from "react";
import styled from "styled-components";

// import { useSelectFriend } from "@Redux";

const Img = styled.img`
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
`;

interface Props {
  className?: string;
  userId: string;
}

export const UserImg: FC<Props> = ({ className, userId }) => {
  // const { imageUrl } = useSelectFriend(friendId);
  return (
    <Img
      // src={imageUrl}
      className={className}
    />
  );
};
