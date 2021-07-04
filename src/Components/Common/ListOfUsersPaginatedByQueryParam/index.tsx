import React, { FC, useMemo, useCallback, useEffect } from "react";
import styled from "styled-components";

import {
  useQueryParamNumber,
  useUrlWithNewParams,
  useUrl,
  useEffectAnyDependencies,
} from "@Hooks";

import { ListOfUsers } from "../ListOfUsers";
import { Pagination } from "../Pagination";

const Div = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

interface ListOfUsersPaginatedProps {
  userIds: Array<string>;
  scrollRef?: React.RefObject<HTMLDivElement>;
}

const usePage = () => {
  const pageParam = useQueryParamNumber(`page`);
  return pageParam || 1;
};

const useToPreviousPage = (page: number) => {
  return useUrlWithNewParams({ page: page - 1 });
};

const useToNextPage = (page: number) => {
  return useUrlWithNewParams({ page: page + 1 });
};

export const ListOfUsersPaginatedByQueryParam = ({
  userIds,
  scrollRef,
}: ListOfUsersPaginatedProps) => {
  const page = usePage();
  const toPreviousPage = useToPreviousPage(page);
  const toNextPage = useToNextPage(page);

  const first = 10 * (page - 1);
  const last = Math.min(first + 10, userIds.length);
  const userIdsForPage = userIds.slice(first, last);

  const scroll = useCallback(() => {
    /*
      For some reason, scrollIntoView was only working like 50% of the time, but
      when I wrap it in setTimeout it always works.
    */
    setTimeout(() => {
      if (scrollRef?.current) {
        scrollRef.current.scrollIntoView({ behavior: `smooth`, inline: `start` });
      }
    }, 0);
  }, [scrollRef]);

  // scroll to top whenever the url changes
  const url = useUrl();
  useEffectAnyDependencies(() => {
    scroll();
  }, [url]);

  return (
    <Div>
      {userIds.length === 0 ? null : (
        <>
          <ListOfUsers userIds={userIdsForPage} />
          <Pagination
            first={first}
            last={last}
            numberOfResults={userIds.length}
            toPreviousPage={toPreviousPage}
            toNextPage={toNextPage}
          />
        </>
      )}
    </Div>
  );
};
