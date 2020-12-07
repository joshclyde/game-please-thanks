import axios from "axios";

import { SpotifySearchResponse, QueryParams } from "./types";

export interface SpotifySearchParams {
  accessToken: string;
  q: string | Array<string>;
  type: "album" | "artist" | "playlist";
  market: "from_token" | "US";
  limit: number;
  offset?: number;
  include_external?: "audio";
}

const url = `https://api.spotify.com/v1/search`;

export const spotifySearch = async ({
  accessToken,
  q,
  type,
  market,
  limit,
  offset,
  include_external,
}: SpotifySearchParams) => {
  const headers = {
    Authorization: `Bearer ` + accessToken,
  };
  const params: QueryParams = {
    q: typeof q === `string` ? q.replace(` `, `%20`) : q.join(`%20`).replace(` `, `%20`),
    type,
    market,
    limit,
    offset,
    include_external,
  };

  const a = await axios.get<SpotifySearchResponse>(url, {
    headers,
    params,
  });
  console.log(a);
  return a;
};
