import React, { FC, useEffect, useCallback } from "react";

import {
  useLoadSpotifyPlayer,
  useSpotifyPlay,
  useSelectSpotifyThisDeviceId,
} from "@Redux";

const POCPlayerFC: FC<{}> = () => {
  const loadPlayer = useLoadSpotifyPlayer();
  useEffect(() => {
    loadPlayer();
  }, [loadPlayer]);
  const play = useSpotifyPlay();
  const deviceId = useSelectSpotifyThisDeviceId();
  const onClick = useCallback(() => {
    play({
      contextURI: `spotify:album:2qehskW9lYGWfYb0xPZkrS`, // BTS's BE album
      deviceId,
    });
  }, [play, deviceId]);
  return (
    <div>
      Player. <button onClick={onClick}>Play Me</button>
    </div>
  );
};

export const POCPlayer = POCPlayerFC;
