import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  makeThunkFetchSpotifyDevices,
  selectSpotifyDevicesLoadingState,
  selectSpotifyDevices,
} from "@Redux";

const POCDevicesFC: FC<{}> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(makeThunkFetchSpotifyDevices());
  }, [dispatch]);
  const { isLoading, isLoadFailure, isLoadAttempted } = useSelector(
    selectSpotifyDevicesLoadingState,
  );
  const devices = useSelector(selectSpotifyDevices);

  if (isLoading) {
    return <div>Devices are loading.</div>;
  }

  if (isLoadFailure) {
    return <div>Devices failed to load.</div>;
  }

  if (!isLoadAttempted) {
    return <div>Devices have not attempted to load.</div>;
  }

  return <div>{JSON.stringify(devices)}</div>;
};

export const POCDevices = POCDevicesFC;
