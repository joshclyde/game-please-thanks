import React, { FC } from "react";

import { cx } from "@Utils";

import "./index.css";

interface BookmarkProps {
  className?: string;
  name: string;
  url: string;
  iconUrl: string;
}

const BookmarkFC: FC<BookmarkProps> = ({ className, name, url, iconUrl }) => (
  <a className={cx(`BookmarksBookmark`, className)} href={url}>
    <img src={iconUrl} width={32} height={32} />
    {name}
  </a>
);

export const Bookmark = BookmarkFC;
