import React, { FC, useEffect } from "react";

import {
  useSelectSpotifyDevices,
  useLoadSpotifyDevices,
  useSelectAreSpotifyDevicesLoading,
  useSelectDidSpotifyDevicesFail,
} from "@Redux";

const POCDevicesFC: FC<{}> = () => {
  const load = useLoadSpotifyDevices();
  useEffect(() => {
    load();
  }, [load]);
  const isLoading = useSelectAreSpotifyDevicesLoading();
  const isLoadFailure = useSelectDidSpotifyDevicesFail();
  const devices = useSelectSpotifyDevices();

  if (isLoading) {
    return <div>Devices are loading.</div>;
  }

  if (isLoadFailure) {
    return <div>Devices failed to load.</div>;
  }

  // if (!isLoadAttempted) {
  //   return <div>Devices have not attempted to load.</div>;
  // }

  return <div>{JSON.stringify(devices)}</div>;
};

export const POCDevices = POCDevicesFC;
