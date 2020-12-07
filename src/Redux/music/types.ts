import { SpotifySearchResponse } from "@Api";

export interface MusicState {
  spotifyAccessToken: string;
  spotify: {
    searchResults: Record<string, SpotifySearchResponse>;
  };
}
