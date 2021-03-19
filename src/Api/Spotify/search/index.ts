import axios from "axios";

import { SpotifySearchResponse, QueryParams } from "./types";

export interface SpotifySearchParams
  extends Pick<QueryParams, "q" | "type" | "limit" | "offset"> {
  accessToken: string;
}

const url = `https://api.spotify.com/v1/search`;

export const spotifySearch = async ({
  accessToken,
  q,
  type,
  limit,
  offset,
}: SpotifySearchParams) => {
  const headers = {
    Authorization: `Bearer ` + accessToken,
  };
  const params: QueryParams = {
    q,
    type,
    market: `from_token`,
    limit,
    offset,
    // include_external,
  };

  const a = await axios.get<SpotifySearchResponse>(url, {
    headers,
    params,
  });
  return a;
};
