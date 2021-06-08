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

export const LinkFancy: FC<any> = ({ children, ...props }) => {
  return (
    <Text {...props}>
      <StyledPointer />
      {children}
    </Text>
  );
};

const TextButton = styled(Text)`
  cursor: pointer;
`;

export const LinkFancyButton: FC<any> = ({ children, ...props }) => {
  return (
    <TextButton as="div" {...props}>
      <StyledPointer />
      {children}
    </TextButton>
  );
};
