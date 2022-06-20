import React, { FC } from "react";
import styled from "styled-components";

import { COLORS } from "@Utils";

const Svg = styled.svg`
  cursor: pointer;
`;

export const IconRightArrow: FC<any> = (props) => {
  return (
    <Svg
      {...props}
      width="21"
      height="16"
      viewBox="0 0 21 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="6" width="21" height="4" fill={COLORS.YELLOW} />
      <rect x="15" y="4" width="4" height="2" fill={COLORS.YELLOW} />
      <rect x="15" y="10" width="4" height="2" fill={COLORS.YELLOW} />
      <rect x="13" y="2" width="4" height="3" fill={COLORS.YELLOW} />
      <rect x="13" y="11" width="4" height="3" fill={COLORS.YELLOW} />
      <rect x="12" width="3" height="3" fill={COLORS.YELLOW} />
      <rect x="12" y="13" width="3" height="3" fill={COLORS.YELLOW} />
    </Svg>
  );
};
