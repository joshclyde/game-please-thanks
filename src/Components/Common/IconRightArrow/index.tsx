import React, { FC } from "react";

import { IconLeftArrow } from "../IconLeftArrow";

export const IconRightArrow: FC<any> = (props) => (
  <IconLeftArrow transform="rotate(180)" {...props} />
);
