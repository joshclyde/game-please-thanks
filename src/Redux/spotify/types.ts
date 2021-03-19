import { SpotifyDevice, SimplifiedAlbum, TrackObject } from "@Api";
import { LoadingState } from "@ReduxUtils";

export interface SpotifyState {
  spotifyAccessToken: string;
  searchResults: {
    load: LoadingState;
    value: Record<string, Record<string, string>>;
  };
  devices: {
    load: LoadingState;
    value: Array<SpotifyDevice>;
  };
  player: {
    load: LoadingState;
    play: {
      load: LoadingState;
    };
  };
  simplifiedAlbums: Record<string, SimplifiedAlbum>;
  tracks: Record<string, TrackObject>;
}
