interface SpotifyAuthorizeParameters {
  // clientId: string;
  // responseType: string;
  redirectUri: string;
  // state: string; TODO; do this later i guess
  // scope: string;
  showDialog: "true" | "false";
}

const CLIENT_ID = `7b5ef5a0d7094b5b84a2a6d85deccd65`;

const scopes = [
  `ugc-image-upload`,
  `user-read-recently-played`,
  `user-top-read`,
  `user-read-playback-position`,
  `user-read-playback-state`,
  `user-modify-playback-state`,
  `user-read-currently-playing`,
  `app-remote-control`,
  `playlist-modify-public`,
  `playlist-modify-private`,
  `playlist-read-private`,
  `playlist-read-collaborative`,
  `user-follow-modify`,
  `user-follow-read`,
  `user-library-modify`,
  `user-library-read`,
  `user-read-email`,
  `user-read-private`,
];

/*
  Doing the "Implicit Grant Flow"
  https://developer.spotify.com/documentation/general/guides/authorization-guide/
*/
export const makeSpotifyAuthorizeUrl = ({
  redirectUri,
  showDialog,
}: SpotifyAuthorizeParameters) => {
  // https://accounts.spotify.com/authorize
  // ?client_id=5fe01282e94241328a84e7c5cc169164&redirect_uri=http:%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&response_type=token&state=123
  const url = new URL(`/authorize`, `https://accounts.spotify.com`);
  url.searchParams.append(`client_id`, CLIENT_ID);
  url.searchParams.append(`response_type`, `token`);
  url.searchParams.append(`redirect_uri`, redirectUri);
  // url.searchParams.append(`state`, CLIENT_ID);
  url.searchParams.append(`scope`, scopes.join(`,`));
  url.searchParams.append(`show_dialog`, showDialog);
  return url;
};
