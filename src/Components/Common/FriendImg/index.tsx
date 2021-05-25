import React, { FC } from "react";
import styled from "styled-components";

import { useSelectFriend } from "@Redux";

const Img = styled.img`
  image-rendering: pixelated;
`;

interface Props {
  className?: string;
  friendId: string;
}

export const FriendImg: FC<Props> = ({ className, friendId }) => {
  const { imageUrl } = useSelectFriend(friendId);
  return <Img src={imageUrl} className={className} />;
};
