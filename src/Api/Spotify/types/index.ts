/*
  Spotify has a "Objects Index" in its documentation.
  https://developer.spotify.com/documentation/web-api/reference/#objects-index

  For now, I will re-use the names from the Objects Index and typing of it.
*/

export interface PagingObject<Item> {
  href: string;
  items?: Array<Item>;
  limit: number;
  next: string;
  offset: number;
  previous?: string;
  total: number;
}

export interface SimplifiedAlbum {
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
