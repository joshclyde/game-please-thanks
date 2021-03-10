import React, { FC } from "react";

import { RootIcon } from "../RootIcon";
import { IconProps } from "../types";

export const IconList: FC<IconProps> = (props) => {
  return (
    <RootIcon
      {...props}
      d="M1 2C1 1.44772 1.44772 1 2 1H14C14.5523 1 15 1.44772 15 2V4C15 4.55228 14.5523 5 14 5H2C1.44772 5 1 4.55228 1 4V2ZM1 7C1 6.44772 1.44772 6 2 6H14C14.5523 6 15 6.44772 15 7V9C15 9.55229 14.5523 10 14 10H2C1.44772 10 1 9.55229 1 9V7ZM2 11C1.44772 11 1 11.4477 1 12V14C1 14.5523 1.44772 15 2 15H14C14.5523 15 15 14.5523 15 14V12C15 11.4477 14.5523 11 14 11H2Z"
    />
  );
};
