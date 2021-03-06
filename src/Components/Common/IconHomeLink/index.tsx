import React, { FC } from "react";
import { Link as LinkReact } from "react-router-dom";
import styled from "styled-components";

import { COLORS } from "@Utils";

const Text = styled(LinkReact)``;

export const IconHomeLink: FC<any> = ({ children, ...props }) => {
  return (
    <Text {...props} to="/">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="6" width="16" height="10" fill={COLORS.YELLOW} />
        <rect x="2" y="4" width="12" height="12" fill={COLORS.YELLOW} />
        <rect x="4" y="2" width="8" height="12" fill={COLORS.YELLOW} />
        <rect x="6" width="4" height="12" fill={COLORS.YELLOW} />
        <rect x="3" y="8" width="10" height="5" fill={COLORS.BLACK} />
        <rect x="5" y="6" width="4" height="5" fill={COLORS.BLACK} />
        <rect x="7" y="6" width="4" height="5" fill={COLORS.BLACK} />
        <rect x="7" y="4" width="2" height="5" fill={COLORS.BLACK} />
      </svg>
    </Text>
  );
};
