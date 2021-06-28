import React, { FC } from "react";
import styled from "styled-components";

import { Text, IconBackArrow } from "@Common";

import { Arrow } from "./Arrow";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

const ResultsText = styled(Text)`
  margin: 0 auto 0 auto;
`;

interface Props {
  first: number;
  last: number;
  numberOfResults: number;
  goNextPage: () => void;
  goPreviousPage: () => void;
}

export const Pagination: FC<Props> = ({
  first,
  last,
  numberOfResults,
  goNextPage,
  goPreviousPage,
}) => {
  return (
    <Div>
      {first > 0 ? <IconBackArrow onClick={goPreviousPage} /> : null}
      <ResultsText>{`${first + 1}-${last} of ${numberOfResults}`}</ResultsText>
      {last < numberOfResults ? <Arrow onClick={goNextPage} /> : null}
    </Div>
  );
};
