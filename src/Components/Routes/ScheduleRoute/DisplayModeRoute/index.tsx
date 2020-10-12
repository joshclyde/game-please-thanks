import React, { FC, useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";

import { startFirebaseEventListening } from "@Firebase";
import {
  selectEventsForDate,
  State,
  selectScheduleDataIsLoading,
  selectScheduleDataIsLoadSuccessful,
  selectScheduleDateIsLoadAttempted,
  makeThunkFetchUserDataSchedule,
} from "@Redux";

const mapState = (state: State) => ({
  scheduleData: selectEventsForDate(state, new Date()),
  scheduleDataIsLoadAttempted: selectScheduleDateIsLoadAttempted(state),
  scheduleDataIsLoading: selectScheduleDataIsLoading(state),
  scheduleDataIsLoadSuccessful: selectScheduleDataIsLoadSuccessful(state),
});

const mapDispatch = {
  fetchUserDataSchedule: makeThunkFetchUserDataSchedule,
};

const connector = connect(mapState, mapDispatch);

type DisplayModeRouteProps = ConnectedProps<typeof connector> & {};

const DisplayModeRouteFC: FC<DisplayModeRouteProps> = ({
  scheduleData,
  fetchUserDataSchedule,
  scheduleDataIsLoadAttempted,
}) => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  useEffect(() => {
    startFirebaseEventListening(
      () => {
        setIsUserSignedIn(true);
      },
      () => {
        setIsUserSignedIn(false);
      },
    );
  }, []);

  useEffect(() => {
    if (!scheduleDataIsLoadAttempted && isUserSignedIn) {
      fetchUserDataSchedule();
    }
  }, [scheduleDataIsLoadAttempted, isUserSignedIn, fetchUserDataSchedule]);

  if (Object.keys(scheduleData).length === 1) {
    const currentScheduleEvent = Object.values(scheduleData)[0];
    return (
      <>
        <Link to={`/schedule/edit`}>Edit Schedule</Link>
        <h1>{currentScheduleEvent.title}</h1>
        <h2>{currentScheduleEvent.description}</h2>
      </>
    );
  }

  if (isUserSignedIn) {
    return <div>Loading schedule data.</div>;
  }
  return <div>Not signed in</div>;
};

export const DisplayModeRoute = connector(DisplayModeRouteFC);
