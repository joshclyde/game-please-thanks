import { SpotifySearchResponse, SpotifyDevice } from "@Api";
import { LoadingState } from "@ReduxUtils";

export interface SpotifyState {
  spotifyAccessToken: string;
  searchResults: {
    load: LoadingState;
    value: Record<string, SpotifySearchResponse>;
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
}
