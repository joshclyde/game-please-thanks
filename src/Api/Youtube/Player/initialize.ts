import { YoutubePlayer } from "./player";
// TODO: I feel like this shouldn't belong in API?

/*
  Player Functions: https://developers.google.com/youtube/iframe_api_reference#Playback_controls
*/

declare let YT: any;

const intializePlayerInstance = () => {
  return new Promise<void>((resolve) => {
    const onReady = (event: any) => {
      event.target.playVideo();
      resolve();
    };
    const onStateChange = (event: any) => console.log(`STATE CHANGE ${event.data}`);
    YoutubePlayer.PlayerInstance = new YT.Player(`ytplayer`, {
      events: {
        onReady,
        onStateChange,
      },
    });
  });
};

/*
  Returns a promise that resolves when the Youtube Player API has loaded.
*/
const waitForYoutubePlayerApi = () => {
  return new Promise<void>((resolve, reject) => {
    if ((window as any).isYoutubePlayerApiLoaded) {
      resolve();
    }
    function removeEventCallback() {
      (window as any).removeEventListener(`youtubePlayerApiLoaded`, eventCallback);
    }
    function eventCallback() {
      removeEventCallback();
      resolve();
    }
    (window as any).addEventListener(`youtubePlayerApiLoaded`, eventCallback);
    if ((window as any).isYoutubePlayerApiLoaded) {
      removeEventCallback();
      resolve();
    }
  });
};

/*
  Initalizes the Spotify player instance once the Spotify SDK has loaded.
*/
export const initializeYoutubePlayer = async () => {
  await waitForYoutubePlayerApi();
  await intializePlayerInstance();
};
