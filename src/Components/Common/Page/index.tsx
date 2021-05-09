import React, { FC } from "react";
import styled from "styled-components";

import { BottomIcons } from "../BottomIcons";

const PageHeader = styled.h1`
  color: #ff0fbc;
  font-size: 1em;
  margin: 0px;
  margin-top: 32px;
  margin-bottom: 32px;
  align-self: center;
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Div1 = styled.div`
  justify-content: space-between;

  display: flex;
  flex-direction: column;
  max-width: 512px;
  margin-right: auto;
  margin-left: auto;
  height: 100%;
`;

const StyledBottomIcons = styled(BottomIcons)`
  align-self: center;
  margin-top: 32px;
  margin-bottom: 32px;
`;

interface Props {
  header: string;
}

export const Page: FC<Props> = ({ header, children }) => {
  return (
    <Div1>
      <Div2>
        <PageHeader>{header}</PageHeader>
        {children}
      </Div2>
      <StyledBottomIcons />
    </Div1>
  );
};
