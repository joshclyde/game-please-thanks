import { multiclass } from "^utils/multiclass";
import * as React from "react";
import { SFC } from "react";
import injectSheet from "react-jss";

type Props = {
  className?: string;
  classes: {
    container: string;
    albumCover: string;
  };
};

const DumbAlbum: SFC<Props> = ({ className, classes }) => (
  <div className={multiclass(className, classes.container)}>
    <img className={classes.albumCover} src="assets/albums/love-yourself-tear.jpeg" />
  </div>
);

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 200,
    // height: "100%",
  },
  albumCover: {
    width: 200,
    height: 200,
  },
};

export const Album = injectSheet(styles)(DumbAlbum);
