import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  className?: string;
  href: string;
  color?: string;
  disabled?: boolean;
}

const LinkStyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100%;
  color: white;
  text-decoration: none;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-width: 0px 2px 0px 0px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    background-color: rgba(255, 255, 255, 0.3);
    outline: none;
  }
`;

const HeaderLinkFC: FunctionComponent<Props> = ({ className, href, children }) => (
  <LinkStyled className={className} to={href}>
    {children}
  </LinkStyled>
);

export const HeaderLink = HeaderLinkFC;
