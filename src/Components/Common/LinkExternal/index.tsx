import React, { FC } from "react";
import styled from "styled-components";

const Text = styled.a`
  color: #0fff27;
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
