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
  external_urls: ExternalUrlObject;
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
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}
export interface ImagesEntity {
  height: number;
  url: string;
  width: number;
}

export interface TrackObject {
  album: SimplifiedAlbum;
  artists: Array<ArtistsEntity>;
  available_markets?: Array<string>;
  /*
    NOTE: this is not the number of where the track is on the disc, but rather which disc
    the track is on if there are multiple discs (so will be 1 99% of the time)
  */
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIdObject;
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  /*
    Part of the response when Track Relinking is applied, and the requested track has been
    replaced with different track. The track in the linked_from object contains information
    about the originally requested track.

    TODO: will I need to worry about this ever?
  */
  linked_from?: null;
  name: string;
  popularity: number;
  preview_url: string;
  restrictions?: TrackRestrictionObject;
  track_number: number;
  type: "track";
  uri: string;
}

interface ExternalIdObject {
  ean?: string;
  isrc?: string;
  upc?: string;
}

interface ExternalUrlObject {
  spotify: string;
}

interface TrackRestrictionObject {
  reason: "market" | "product" | "explicit";
}
