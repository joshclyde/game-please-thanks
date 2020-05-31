import { cx } from "@Utils";
import * as React from "react";
import { FunctionComponent } from "react";
import injectSheet from "react-jss";

type Props = {
  classes: {
    container: string;
  };
  className?: string;
  color?: string;
  onClick?: () => void;
};

const Tile: FunctionComponent<Props> = ({ className, classes, children, onClick }) => (
  <div className={cx(classes.container, className)} onClick={onClick}>
    {children}
  </div>
);

const styles = {
  container: {
    backgroundColor: "#F7F5F2",
    border: "none",
    color: "#313130",
    padding: "8px 20px",
    // fontSize: "3em",
    borderRadius: 8,
  },
};

const TileWithStyles = injectSheet(styles)(Tile);

export default TileWithStyles;
