import React, { FC, useEffect } from "react";

import { useGetAccessTokenFromUrl } from "@Hooks";
import { useSetSpotifyAccessToken } from "@Redux";

const SpotifyAuthRedirectFC: FC<{}> = () => {
  const accessToken = useGetAccessTokenFromUrl();
  const setValue = useSetSpotifyAccessToken();
  useEffect(() => {
    setValue(accessToken);
  }, [setValue, accessToken]);

  return (
    <div>
      <div>URL Access Token: {accessToken}</div>
    </div>
  );
};

export const SpotifyAuthRedirect = SpotifyAuthRedirectFC;
