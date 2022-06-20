import React, { FC } from "react";
import styled from "styled-components";

import { COLORS } from "@Utils";

import { BottomIcons } from "../BottomIcons";

const PageHeader = styled.h1`
  color: ${COLORS.PINK};
  font-size: 1.2em;
  line-height: 1.3em;
  letter-spacing: 0.03em;
  margin: 0px;
  margin-top: 32px;
  margin-bottom: 32px;
  align-self: center;
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  @media (min-width: 512px) {
    padding: 0px 32px;
  }
`;

const Div1 = styled.div`
  justify-content: space-between;

  display: flex;
  flex-direction: column;
  max-width: 768px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  height: 100%;
`;

const StyledBottomIcons = styled(BottomIcons)`
  align-self: center;
  margin-top: 32px;
`;

interface Props {
  header: string;
}

export const Page: FC<Props> = ({ header, children }) => {
  return (
    <>
      <Div1>
        <Div2>
          <PageHeader>{header}</PageHeader>
          {children}
        </Div2>
      </Div1>
      <StyledBottomIcons />
    </>
  );
};
