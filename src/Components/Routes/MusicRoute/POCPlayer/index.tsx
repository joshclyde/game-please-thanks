import React, { FC, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  makeThunkCreateSpotifyPlayer,
  makeThunkSpotifyPlayerPlay,
  selectSpotifyThisDeviceId,
} from "@Redux";

const POCPlayerFC: FC<{}> = () => {
  const deviceId = useSelector(selectSpotifyThisDeviceId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(makeThunkCreateSpotifyPlayer());
  }, [dispatch]);
  const onClick = useCallback(() => {
    dispatch(
      makeThunkSpotifyPlayerPlay({
        contextURI: `spotify:album:2qehskW9lYGWfYb0xPZkrS`, // BTS's BE album
        deviceId,
      }),
    );
  }, [dispatch, deviceId]);
  return (
    <div>
      Player. <button onClick={onClick}>Play Me</button>
    </div>
  );
};

export const POCPlayer = POCPlayerFC;
