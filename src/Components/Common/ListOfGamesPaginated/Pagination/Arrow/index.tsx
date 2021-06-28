import React, { FC } from "react";

import { IconBackArrow } from "@Common";

interface Props {
  onClick: () => void;
}

export const Arrow: FC<Props> = ({ onClick }) => (
  <IconBackArrow transform="rotate(180)" onClick={onClick} />
);
