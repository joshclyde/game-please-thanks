import React, { FC } from "react";
import styled from "styled-components";

interface BookmarkProps {
  className?: string;
  name: string;
  url: string;
  iconUrl: string;
}

const A = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BookmarkFC: FC<BookmarkProps> = ({ className, name, url, iconUrl }) => (
  <A className={className} href={url}>
    <img src={iconUrl} width={32} height={32} />
    {name}
  </A>
);

export const Bookmark = BookmarkFC;
