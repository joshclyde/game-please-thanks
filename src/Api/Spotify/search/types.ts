import { PagingObject, SimplifiedAlbum } from "../types";

/*
  Search Request Query Params
*/
export interface QueryParams {
  q: string;
  type: "album" | "artist" | "playlist";
  market: "from_token" | "US";
  limit: number;
  offset?: number;
  include_external?: "audio";
}

/*
  Search Response
*/
export interface SpotifySearchResponse {
  albums: PagingObject<SimplifiedAlbum>;
}
