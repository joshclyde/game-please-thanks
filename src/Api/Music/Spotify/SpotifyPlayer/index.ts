// TODO: I feel like this shouldn't belong in API?

// How to play: https://developer.spotify.com/documentation/web-api/reference/player/start-a-users-playback/

declare let Spotify: any;

interface ISpotifyPlayer {
  hasInitializedSpotifyPlayer: boolean;
  hasSDKLoaded: boolean | undefined;
  PlayerInstance: any;
  isReady: boolean;
}

const SpotifyPlayer: ISpotifyPlayer = {
  hasInitializedSpotifyPlayer: false,
  hasSDKLoaded: undefined,
  PlayerInstance: undefined,
  isReady: false,
};

const setIsReady = (isReady: boolean) => (SpotifyPlayer.isReady = isReady);

const intializePlayerInstance = async ({ accessToken }: { accessToken: string }) => {
  SpotifyPlayer.PlayerInstance = new Spotify.Player({
    name: `Jams Tree`,
    getOAuthToken: (callback: (accessToken: string) => void) => callback(accessToken),
  });

  // Errors
  SpotifyPlayer.PlayerInstance.addListener(
    `initialization_error`,
    ({ message }: { message: string }) => {
      console.error(message);
    },
  );
  SpotifyPlayer.PlayerInstance.addListener(
    `authentication_error`,
    ({ message }: { message: string }) => {
      console.error(message);
    },
  );
  SpotifyPlayer.PlayerInstance.addListener(
    `account_error`,
    ({ message }: { message: string }) => {
      console.error(message);
    },
  );
  SpotifyPlayer.PlayerInstance.addListener(
    `playback_error`,
    ({ message }: { message: string }) => {
      console.error(message);
    },
  );

  // Playback status updates
  SpotifyPlayer.PlayerInstance.addListener(`player_state_changed`, (state: any) => {
    console.log(state);
  });

  // Ready
  SpotifyPlayer.PlayerInstance.addListener(
    `ready`,
    ({ device_id }: { device_id: string }) => {
      console.log(`Ready with Device ID`, device_id);
      setIsReady(true);
    },
  );

  // Not Ready
  SpotifyPlayer.PlayerInstance.addListener(
    `not_ready`,
    ({ device_id }: { device_id: string }) => {
      console.log(`Device ID has gone offline`, device_id);
      setIsReady(false);
    },
  );

  // Connect to the player!
  await SpotifyPlayer.PlayerInstance.connect();
};

/*
  Returns a promise that resolves when the Spotify SDK has loaded.
*/
const waitForSpotifySDK = () => {
  return new Promise(async (resolve, reject) => {
    (window as any).onSpotifyWebPlaybackSDKReady = () => {
      resolve();
    };
    if (Boolean(Spotify)) {
      resolve();
    }
  });
};

/*
  Initalizes the Spotify player instance once the Spotify SDK has loaded.
*/
export const initializeSpotifyPlayer = async ({
  accessToken,
}: {
  accessToken: string;
}) => {
  await waitForSpotifySDK();
  await intializePlayerInstance({ accessToken });
};
