import React, { FC } from "react";

import { YoutubePlayer } from "@Domain";

const RootRouteFC: FC<{}> = () => {
  return (
    <div>
      Youtube Player
      <YoutubePlayer />
    </div>
  );
};

export const RootRoute = RootRouteFC;
