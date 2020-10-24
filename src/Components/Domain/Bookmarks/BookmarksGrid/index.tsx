import React, { FC } from "react";

import { Bookmark } from "../Bookmark";

import "./index.css";

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

export const BookmarksGridFC: FC<{}> = () => (
  <div className={`BookmarkBookmarksGrid`}>
    {bookmarks.map(({ name, url, iconUrl }) => (
      <Bookmark name={name} url={url} iconUrl={iconUrl} />
    ))}
  </div>
);

export const BookmarksGrid = BookmarksGridFC;
