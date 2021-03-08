import { YoutubePlayer } from "./player";

export * from "./initialize";

export const playYoutubePlayer = () => {
  YoutubePlayer.PlayerInstance.playVideo();
};

export const pauseYoutubePlayer = () => {
  YoutubePlayer.PlayerInstance.pauseVideo();
};
export const loadVideoYoutubePlayer = () => {
  YoutubePlayer.PlayerInstance.loadVideoById(`M7lc1UVf-VE`);
};
