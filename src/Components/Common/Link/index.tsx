import React, { FC } from "react";
import { Link as LinkReact } from "react-router-dom";
import styled from "styled-components";

import { COLORS } from "@Utils";

const Text = styled(LinkReact)`
  color: ${COLORS.GREEN};
  text-decoration: none;
  font-size: 0.8em;
  line-height: 1.3em;
  letter-spacing: 0.03em;
  position: relative;
  width: fit-content;
  &:hover {
    text-decoration: underline;
  }
`;

export const Link: FC<any> = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};

export const RedLink = styled(Link)`
  color: ${COLORS.RED};
`;
