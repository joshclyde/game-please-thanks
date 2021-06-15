import React, { FC } from "react";
import { Link as LinkReact } from "react-router-dom";
import styled from "styled-components";

import { COLORS } from "@Utils";

import { Pointer } from "./Pointer";

const duration = `0.075s`;
const delay = `0.01s`;

const Text = styled(LinkReact)`
  color: ${COLORS.GREEN};
  text-decoration: none;
  font-size: 1em;
  position: relative;
  transition: padding-right ${duration} linear ${delay};
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
  transition: width ${duration} linear ${delay}, padding-right ${duration} linear ${delay};
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
