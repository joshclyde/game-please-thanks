import React, { FC } from "react";
import styled from "styled-components";

import { Bookmark } from "../Bookmark";

const bookmarks = [
  {
    name: `google`,
    url: `https://www.google.com`,
    iconUrl: `https://www.google.com/favicon.ico`,
  },
  {
    name: `kroger`,
    url: `https://www.kroger.com`,
    iconUrl: `https://www.kroger.com/favicon.ico`,
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border: solid;

  & > * {
    margin: 10px;
  }
`;

export const BookmarksGridFC: FC<{}> = () => (
  <Container>
    {bookmarks.map(({ name, url, iconUrl }) => (
      <Bookmark name={name} url={url} iconUrl={iconUrl} />
    ))}
  </Container>
);

export const BookmarksGrid = BookmarksGridFC;
