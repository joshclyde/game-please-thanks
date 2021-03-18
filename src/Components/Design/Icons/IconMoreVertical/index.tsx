import React, { FC } from "react";

import { IconProps, dimension } from "../types";

// TODO: change RootIcon to not just take in the svg d attribute.
export const IconMoreVertical: FC<IconProps> = ({
  className,
  size = `small`,
  color = `#0C0C0C`,
}) => {
  return (
    <svg
      className={className}
      width={dimension[size]}
      height={dimension[size]}
      viewBox="0 0 16 16"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="3" r="2" />
      <circle cx="8" cy="8" r="2" />
      <circle cx="8" cy="13" r="2" />
    </svg>
  );
};
