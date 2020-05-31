import React, { FC } from "react";
import injectSheet from "react-jss";
import { Bookmark } from "../Bookmark";

type BookmarksGridProps = {
  classes: { main: string };
};

const bookmarks = [
  {
    name: "google",
    url: "https://www.google.com",
    iconUrl: "https://www.google.com/favicon.ico",
  },
  {
    name: "kroger",
    url: "https://www.kroger.com",
    iconUrl: "https://www.kroger.com/favicon.ico",
  },
];

export const BookmarksGridFC: FC<BookmarksGridProps> = ({ classes }) => (
  <div className={classes.main}>
    {bookmarks.map(({ name, url, iconUrl }) => (
      <Bookmark name={name} url={url} iconUrl={iconUrl} />
    ))}
  </div>
);

export const BookmarksGrid = injectSheet({
  main: {
    display: "flex",
    flexDirection: "row",
    border: "solid",
    "& > *": { margin: 10 },
  },
})(BookmarksGridFC);
