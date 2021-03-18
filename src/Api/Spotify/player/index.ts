import axios from "axios";

import { SpotifyGetPlayerDevicesResponse } from "./types";

export interface SpotifyGetPlayerDevicesParams {
  accessToken: string;
}

const url = `https://api.spotify.com/v1/me/player/devices`;

export const getSpotifyPlayerDevices = async ({
  accessToken,
}: SpotifyGetPlayerDevicesParams) => {
  const headers = {
    Authorization: `Bearer ` + accessToken,
  };

  const a = await axios.get<SpotifyGetPlayerDevicesResponse>(url, {
    headers,
  });
  return a;
};

export interface SpotifyPlayerPlayParams {
  accessToken: string;
  deviceId?: string;
  contextURI?: string;
  URIs?: Array<string>;
}

const urlPlay = `https://api.spotify.com/v1/me/player/play`;

export const spotifyPlayerPlay = async ({
  accessToken,
  deviceId,
  contextURI,
}: SpotifyPlayerPlayParams) => {
  const headers = {
    Authorization: `Bearer ` + accessToken,
  };
  const data = {
    context_uri: contextURI,
  };
  await axios.put(urlPlay, data, { headers, params: { device_id: deviceId } });
};
