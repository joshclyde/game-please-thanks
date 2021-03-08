import React, { FC } from "react";

import { playYoutubePlayer, pauseYoutubePlayer, loadVideoYoutubePlayer } from "@Api";
import { loadFactoryInitializeYoutubePlayer } from "@Redux";

interface YoutubePlayerProps {}

const {
  useLoad,
  useSelectIsLoading,
  useSelectIsLoadSuccessul,
  useSelectIsLoadFailure,
} = loadFactoryInitializeYoutubePlayer;

const YoutubePlayerFC: FC<YoutubePlayerProps> = () => {
  useLoad();
  const isLoading = useSelectIsLoading();
  const isLoadSuccessful = useSelectIsLoadSuccessul();
  const isLoadFailure = useSelectIsLoadFailure();
  return (
    <div>
      <div>
        Youtube Player {`` + isLoading} {`` + isLoadSuccessful} {`` + isLoadFailure}
      </div>
      <button onClick={loadVideoYoutubePlayer}>LOAD ME</button>
      <button onClick={playYoutubePlayer}>PLAY ME</button>
      <button onClick={pauseYoutubePlayer}>PAUSE ME</button>
      <iframe
        id="ytplayer"
        width="320"
        height="180"
        // TODO: the origin has to be correct
        // src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1"
        src="https://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://localhost:8080"
      />
    </div>
  );
};

export const YoutubePlayer = YoutubePlayerFC;
