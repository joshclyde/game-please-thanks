import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { useGetAccessTokenFromUrl } from "@Hooks";
import { makeThunkSetSpotifyAccessToken } from "@Redux";

const SpotifyAuthRedirectFC: FC<{}> = () => {
  const accessToken = useGetAccessTokenFromUrl();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      makeThunkSetSpotifyAccessToken({
        spotifyAccessToken: accessToken,
        shouldSaveToLocalStorage: true,
      }),
    );
  }, [dispatch, accessToken]);

  return (
    <div>
      <div>URL Access Token: {accessToken}</div>
    </div>
  );
};

export const SpotifyAuthRedirect = SpotifyAuthRedirectFC;
