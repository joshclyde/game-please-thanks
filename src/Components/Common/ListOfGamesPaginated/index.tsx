import React, { FC, useState, useCallback, useEffect } from "react";
import styled from "styled-components";

import { ListOfGames } from "@Common";

import { Pagination } from "./Pagination";

const Div = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const ListOfGamesPaginated: FC<{
  gameIds: Array<string>;
  scrollRef?: React.RefObject<HTMLDivElement>;
}> = ({ gameIds, scrollRef }) => {
  const [page, setPage] = useState(1);
  useEffect(() => {
    // when gameIds changes we want to reset the page to the first page
    setPage(1);
  }, [gameIds]);
  const first = 10 * (page - 1);
  const last = Math.min(first + 10, gameIds.length);
  const gameIdsForPage = gameIds.slice(first, last);

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
  const goNextPage = useCallback(() => {
    setPage((currentPage) => currentPage + 1);
    scroll();
  }, [setPage, scroll]);
  const goPreviousPage = useCallback(() => {
    setPage((currentPage) => currentPage - 1);
    scroll();
  }, [setPage, scroll]);

  return (
    <Div>
      {gameIds.length === 0 ? null : (
        <>
          <ListOfGames gameIds={gameIdsForPage} />
          <Pagination
            first={first}
            last={last}
            numberOfResults={gameIds.length}
            goNextPage={goNextPage}
            goPreviousPage={goPreviousPage}
          />
        </>
      )}
    </Div>
  );
};
