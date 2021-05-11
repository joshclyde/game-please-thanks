import React, { FC } from "react";
import { Link as LinkReact } from "react-router-dom";
import styled from "styled-components";

import { Pointer } from "./Pointer";

const Text = styled(LinkReact)`
  color: #0fff27;
  text-decoration: none;
  font-size: 1em;
  position: relative;
  transition: padding-right 0.05s linear 0.11s;
  padding-right: 32px;
  &:hover {
    padding-right: 0px;
  }
  &:hover svg {
    width: 16px;
    padding-right: 16px;
  }
  display: flex;
  width: fit-content;
`;

const StyledPointer = styled(Pointer)`
  width: 0px;
  padding-right: 0px;
  transition: width 0.05s linear 0.11s, padding-right 0.05s linear 0.11s;
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
