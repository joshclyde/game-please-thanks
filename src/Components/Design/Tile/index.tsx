import React, { FunctionComponent } from "react";
import injectSheet from "react-jss";

import { cx } from "@Utils";

type Props = {
  classes: {
    container: string;
  };
  className?: string;
  color?: string;
  onClick?: () => void;
};

const DumbTile: FunctionComponent<Props> = ({
  className,
  classes,
  children,
  onClick,
}) => (
  <div className={cx(classes.container, className)} onClick={onClick}>
    {children}
  </div>
);

const styles = {
  container: {
    backgroundColor: `#F7F5F2`,
    border: `none`,
    color: `#313130`,
    padding: `8px 20px`,
    // fontSize: "3em",
    borderRadius: 8,
  },
};

export const Tile = injectSheet(styles)(DumbTile);
