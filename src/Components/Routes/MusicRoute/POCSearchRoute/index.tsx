import React, { FC, useCallback, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectSpotifyAccessToken,
  makeThunkFetchSpotifySearchResults,
  makeSpotifySearchResultsKey,
} from "@Redux";

import { SpotifySearchResults } from "./SpotifySearchResults";

const POCSearchRouteFC: FC<{}> = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState(``);
  const onChangeSearchTerm = useCallback(
    (event) => {
      setSearchTerm(event.target.value);
    },
    [setSearchTerm],
  );

  const accessToken = useSelector(selectSpotifyAccessToken);
  const onClickSearch = useCallback(() => {
    dispatch(
      makeThunkFetchSpotifySearchResults({
        accessToken,
        q: searchTerm,
        limit: 10,
        market: `from_token`,
        type: `album`,
      }),
    );
  }, [accessToken, dispatch, searchTerm]);

  const searchResultsKey = useMemo(() => {
    if (searchTerm && accessToken) {
      return makeSpotifySearchResultsKey({
        accessToken,
        q: searchTerm,
        limit: 10,
        market: `from_token`,
        type: `album`,
      });
    } else {
      return undefined;
    }
  }, [accessToken, searchTerm]);

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
