import React, { FC } from "react";

import { IconProps, dimension } from "./types";

interface RootIconProps extends IconProps {
  d: string;
}

export const RootIcon: FC<RootIconProps> = ({
  className,
  size = `small`,
  color = `#0C0C0C`,
  onClick,
  d,
}) => (
  <svg
    className={className}
    width={dimension[size]}
    height={dimension[size]}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d={d} fill={color} />
  </svg>
);
