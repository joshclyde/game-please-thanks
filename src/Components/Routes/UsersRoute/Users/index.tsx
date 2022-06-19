import React, { FC, useRef } from "react";
import styled from "styled-components";

import { Heading, ListOfUsersPaginatedByQueryParam, Text } from "@Common";
import { useQueryParamString } from "@Hooks";
import { useFilteredUserIds } from "@State";

import { QUERY_PARAM } from "../shared";

const Div = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Users: FC<{}> = () => {
  const scrollRef = useRef(null);
  const searchTerm = useQueryParamString(QUERY_PARAM.SEARCH_TERM);
  const userIds = useFilteredUserIds({
    searchTerm: searchTerm || ``,
  });

  return (
    <Div>
      <Heading ref={scrollRef}>Results</Heading>
      {userIds.length === 0 ? (
        <Text>Sorry, no results were found.</Text>
      ) : (
        <ListOfUsersPaginatedByQueryParam userIds={userIds} scrollRef={scrollRef} />
      )}
    </Div>
  );
};
