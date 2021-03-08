interface IYoutubePlayer {
  hasPlayerInitialized: boolean;
  PlayerInstance: any;
}

export const YoutubePlayer: IYoutubePlayer = {
  hasPlayerInitialized: false,
  PlayerInstance: undefined,
};
