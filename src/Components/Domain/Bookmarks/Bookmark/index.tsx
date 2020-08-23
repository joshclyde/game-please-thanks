import { cx } from "@Utils";
import React, { FC } from "react";
import injectSheet from "react-jss";

type BookmarkProps = {
  classes: { main: string };
  className?: string;
  name: string;
  url: string;
  iconUrl: string;
};

const BookmarkFC: FC<BookmarkProps> = ({ classes, className, name, url, iconUrl }) => (
  <a className={cx(classes.main, className)} href={url}>
    <img src={iconUrl} width={32} height={32} />
    {name}
  </a>
);

export const Bookmark = injectSheet({
  main: { display: `flex`, flexDirection: `column`, alignItems: `center` },
})(BookmarkFC);
