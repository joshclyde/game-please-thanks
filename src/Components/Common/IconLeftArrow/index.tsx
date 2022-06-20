import React, { FC } from "react";
import styled from "styled-components";

import { COLORS } from "@Utils";

const Svg = styled.svg`
  cursor: pointer;
`;

export const IconLeftArrow: FC<any> = (props) => {
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
      <rect x="2" y="4" width="4" height="2" fill={COLORS.YELLOW} />
      <rect x="2" y="10" width="4" height="2" fill={COLORS.YELLOW} />
      <rect x="4" y="2" width="4" height="3" fill={COLORS.YELLOW} />
      <rect x="4" y="11" width="4" height="3" fill={COLORS.YELLOW} />
      <rect x="6" width="3" height="3" fill={COLORS.YELLOW} />
      <rect x="6" y="13" width="3" height="3" fill={COLORS.YELLOW} />
    </Svg>
  );
};
