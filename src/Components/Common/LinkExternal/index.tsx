import React, { FC } from "react";
import styled from "styled-components";

import { COLORS } from "@Utils";

const Text = styled.a`
  color: ${COLORS.GREEN};
  text-decoration: none;
  font-size: 1em;
  position: relative;
  width: fit-content;
  &:hover {
    text-decoration: underline;
  }
`;

export const LinkExternal: FC<any> = ({ to, children, ...restProps }) => {
  return (
    <Text {...restProps} href={to}>
      {children}
    </Text>
  );
};
