import React, { FC } from "react";
import { Link as LinkReact } from "react-router-dom";
import styled from "styled-components";

import { Pointer } from "./Pointer";

const Text = styled(LinkReact)`
  color: #0fff27;
  text-decoration: none;
  font-size: 1em;
  margin-left: 32px;
  position: relative;
  &:hover svg {
    display: block;
  }
  display: block;
`;

const StyledPointer = styled(Pointer)`
  position: absolute;
  left: -32px;
  top: 0px;
  display: none;
`;

export const Link: FC<any> = ({ children, ...props }) => {
  return (
    <Text {...props}>
      <StyledPointer />
      {children}
    </Text>
  );
};

const RedText = styled(Text)`
  color: #ff0f0f;
`;

export const RedLink: FC<any> = ({ children, ...props }) => {
  return (
    <RedText {...props}>
      <StyledPointer color="#FF0F0F" />
      {children}
    </RedText>
  );
};
