import React, { FC } from "react";
import styled from "styled-components";

import { Text, IconLeftArrow, Link } from "@Common";

import { IconRightArrow } from "../IconRightArrow";

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
  // hrefs or js function to navigate pages
  toPreviousPage: string | (() => void);
  toNextPage: string | (() => void);
}

export const Pagination = ({
  first,
  last,
  numberOfResults,
  toPreviousPage,
  toNextPage,
}: Props) => {
  let IconPrevious;
  if (typeof toPreviousPage === `function`) {
    IconPrevious = <IconLeftArrow onClick={toPreviousPage} />;
  } else {
    IconPrevious = (
      <Link to={toPreviousPage}>
        <IconLeftArrow />
      </Link>
    );
  }
  let IconNext;
  if (typeof toNextPage === `function`) {
    IconNext = <IconRightArrow onClick={toNextPage} />;
  } else {
    IconNext = (
      <Link to={toNextPage}>
        <IconRightArrow />
      </Link>
    );
  }

  return (
    <Div>
      {first > 0 ? IconPrevious : null}
      <ResultsText>{`${first + 1}-${last} of ${numberOfResults}`}</ResultsText>
      {last < numberOfResults ? IconNext : null}
    </Div>
  );
};
