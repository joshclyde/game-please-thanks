import React, { FC } from "react";
import { Link as LinkReact } from "react-router-dom";
import styled from "styled-components";

const Text = styled(LinkReact)`
  color: #0fff27;
  text-decoration: none;
  font-size: 1em;
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
  color: #ff0f0f;
`;
