import { makeAction2 } from "@ReduxUtils";

const {
  makeCase: makeCaseSetSpotifyAccessTokenAction,
  useDispatchAction: useSetSpotifyAccessToken,
} = makeAction2(`SET_SPOTIFY_ACCESS_TOKEN`, (value: string) => ({ value }));

export { makeCaseSetSpotifyAccessTokenAction, useSetSpotifyAccessToken };
