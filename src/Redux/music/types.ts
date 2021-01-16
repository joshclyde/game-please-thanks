import { SpotifySearchResponse, SpotifyDevice } from "@Api";

export interface MusicState {
  spotifyAccessToken: string;
  spotify: {
    searchResults: Record<string, SpotifySearchResponse>;
    devices: Array<SpotifyDevice>;
  };
}
