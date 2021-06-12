import React, { FC } from "react";
import styled from "styled-components";

import { Heading, Text } from "@Common";
import { COLORS } from "@Utils";

const Div = styled.div`
  padding: 16px 32px;
  border: ${COLORS.BLUE} solid 1px;
  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;

interface Props {
  className?: string;
  header?: string;
  list?: Array<React.ReactNode>;
}

export const List: FC<Props> = ({ className, header, list, children }) => {
  return (
    <Div className={className}>
      {header ? <Heading>{header}</Heading> : null}
      {list ? list.map((text) => <Text>{text}</Text>) : null}
      {children}
    </Div>
  );
};
