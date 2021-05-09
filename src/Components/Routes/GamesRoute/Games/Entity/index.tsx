import React, { FC } from "react";
import styled from "styled-components";

import { Link, Text, GameImg } from "@Common";

export const Img = styled(GameImg)`
  width: 44px;
  height: 63px;
`;

const Div = styled.div`
  display: flex;
  border: blue solid 1px;
  padding: 8px;
`;

const Div2 = styled.div`
  margin: 8px 0 0 16px;
`;

const StyledText = styled(Text)`
  margin: 16px 0 0 32px;
`;

interface Props {
  src: string;
  to: string;
  title: string;
  text: string;
}

const EntityFC: FC<Props> = ({ src, to, title, text }) => {
  return (
    <Div>
      <Img src={src} />
      <Div2>
        <Link to={to}>{title}</Link>
        <StyledText>{text}</StyledText>
      </Div2>
    </Div>
  );
};

export const Entity = EntityFC;
