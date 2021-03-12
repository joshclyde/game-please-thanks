import React, { FC, useCallback, useState, useMemo } from "react";

import { SpotifySearchParams } from "@Api";
import { useLoadSpotifySearchResults } from "@Redux";

import { SpotifySearchResults } from "./SpotifySearchResults";

// TODO: get rid of this
const makeSpotifySearchResultsKey = ({
  q,
  type,
  market,
  limit,
  offset,
  include_external,
}: Omit<SpotifySearchParams, "accessToken">) => {
  return `${q}${type}${market}${limit}${offset}${include_external}`;
};

const POCSearchRouteFC: FC<{}> = () => {
  const [searchTerm, setSearchTerm] = useState(``);
  const onChangeSearchTerm = useCallback(
    (event) => {
      setSearchTerm(event.target.value);
    },
    [setSearchTerm],
  );

  const load = useLoadSpotifySearchResults();
  const onClickSearch = useCallback(() => {
    load(searchTerm);
  }, [load, searchTerm]);

  const searchResultsKey = useMemo(() => {
    if (searchTerm) {
      return makeSpotifySearchResultsKey({
        q: searchTerm,
        limit: 10,
        market: `from_token`,
        type: `album`,
      });
    } else {
      return undefined;
    }
  }, [searchTerm]);

  return (
    <div>
      <div>
        <label htmlFor="searchTerm">Search:</label>
        <input
          type="text"
          id="searchTerm"
          name="searchTerm"
          required
          value={searchTerm}
          onChange={onChangeSearchTerm}
        ></input>
        <button onClick={onClickSearch}>Search</button>
      </div>
      <div>
        <SpotifySearchResults searchResultsKey={searchResultsKey} />
      </div>
    </div>
  );
};

export const POCSearchRoute = POCSearchRouteFC;
