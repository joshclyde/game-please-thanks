import { storiesOf } from "@storybook/react";
import React, { useEffect } from "react";

import { useAddSpotifySearchResults } from "@Redux";

// eslint-disable-next-line import/no-namespace
import { TrackListEntity } from "../";

storiesOf(`ExploreRoute/TrackListEntity`, module).add(`TrackListEntity`, () => {
  return (
    <div>
      <TrackListEntity
        name="Save Me"
        artistName="BTS"
        imageUrl="https://i.scdn.co/image/ab67616d00001e029660ae57836f713884d86cbb"
        index={0}
      />
    </div>
  );
});
