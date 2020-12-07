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
  albums: Albums;
}
export interface Albums {
  href: string;
  items?: Array<AlbumsEntity> | null;
  limit: number;
  next: string;
  offset: number;
  previous?: null;
  total: number;
}
export interface AlbumsEntity {
  album_type: string;
  artists?: Array<ArtistsEntity> | null;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images?: Array<ImagesEntity> | null;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}
export interface ArtistsEntity {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}
export interface ExternalUrls {
  spotify: string;
}
export interface ImagesEntity {
  height: number;
  url: string;
  width: number;
}
