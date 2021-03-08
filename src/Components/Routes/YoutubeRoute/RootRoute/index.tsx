import React, { FC } from "react";

import { YoutubePlayer } from "@Domain";

const RootRouteFC: FC<{}> = () => {
  return (
    <div>
      Hi
      <YoutubePlayer />
    </div>
  );
};

export const RootRoute = RootRouteFC;
