import { makeAction } from "@ReduxUtils";

const {
  isAction: isSetSpotifyAccessTokenAction,
  useDispatchAction: useSetSpotifyAccessToken,
} = makeAction(`SET_SPOTIFY_ACCESS_TOKEN`, (value: string) => ({ value }));

export { isSetSpotifyAccessTokenAction, useSetSpotifyAccessToken };
