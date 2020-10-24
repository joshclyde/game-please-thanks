import React, { FC } from "react";

import { cx } from "@Utils";

import "./index.css";

interface Props {
  className?: string;
  color?: string;
  onClick?: () => void;
}

const TileFC: FC<Props> = ({ className, children, onClick }) => (
  <div className={cx(`DesignTile`, className)} onClick={onClick}>
    {children}
  </div>
);

export const Tile = TileFC;
