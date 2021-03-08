import { initializeYoutubePlayer } from "@Api";

import { loadFactory } from "../shared/loading/factory";

const INITIALIZE_YOUTUBE_PLAYER = `INITIALIZE_YOUTUBE_PLAYER`;
const loadFunction = initializeYoutubePlayer;

export const loadFactoryInitializeYoutubePlayer = loadFactory({
  id: INITIALIZE_YOUTUBE_PLAYER,
  loadFunction,
});
