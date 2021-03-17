import { makeAction } from "@ReduxUtils";

const {
  makeCase: makeCaseSetSpotifyAccessTokenAction,
  useDispatchAction: useSetSpotifyAccessToken,
} = makeAction(`SET_SPOTIFY_ACCESS_TOKEN`, (value: string) => ({ value }));

export { makeCaseSetSpotifyAccessTokenAction, useSetSpotifyAccessToken };
