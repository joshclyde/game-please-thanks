import React, { FC } from "react";
import styled from "styled-components";

import { IconBackLink } from "../IconBackLink";
import { IconHomeLink } from "../IconHomeLink";

const StyledIconHomeLink = styled(IconHomeLink)`
  margin-left: 64px;
  margin-right: 85px;
`;

interface Props {
  className?: string;
}

export const BottomIcons: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <IconBackLink />
      <StyledIconHomeLink />
    </div>
  );
};
