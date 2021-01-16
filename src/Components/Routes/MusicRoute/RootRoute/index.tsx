import React, { FC } from "react";
import { Link } from "react-router-dom";

import { makeSpotifyAuthorizeUrl } from "@Utils";

const RootRouteFC: FC<{}> = () => {
  return (
    <div>
      <ul>
        <li>
          <a
            href={
              makeSpotifyAuthorizeUrl({
                redirectUri: `http://localhost:8080/music/spotify-auth-redirect`,
                showDialog: `false`,
              }).href
            }
          >
            Redirect to Spotify Authoriation
          </a>
        </li>
        <li>
          <Link to="/music/search">Search Page</Link>
        </li>
        <li>
          <Link to="/music/devices">Music Devices</Link>
        </li>
        <li>
          <Link to="/music/player">Music Player</Link>
        </li>
      </ul>
    </div>
  );
};

export const RootRoute = RootRouteFC;
