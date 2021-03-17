import React, { FC, useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";

import { startFirebaseEventListening } from "@Firebase";
import {
  selectCurrentEventsForDate,
  RootState,
  selectScheduleDataIsLoading,
  selectScheduleDataIsLoadSuccessful,
  selectScheduleDateIsLoadAttempted,
  makeThunkFetchUserDataSchedule,
  selectScheduleDataIsLoadFailure,
} from "@Redux";

const mapState = (state: RootState) => ({
  currentEvents: selectCurrentEventsForDate(state, new Date()),
  scheduleDataIsLoadAttempted: selectScheduleDateIsLoadAttempted(state),
  scheduleDataIsLoading: selectScheduleDataIsLoading(state),
  scheduleDataIsLoadSuccessful: selectScheduleDataIsLoadSuccessful(state),
  scheduleDataIsLoadFailure: selectScheduleDataIsLoadFailure(state),
});

const mapDispatch = {
  fetchUserDataSchedule: makeThunkFetchUserDataSchedule,
};

const connector = connect(mapState, mapDispatch);

type DisplayModeRouteProps = ConnectedProps<typeof connector> & {};

const DisplayModeRouteFC: FC<DisplayModeRouteProps> = ({
  currentEvents,
  fetchUserDataSchedule,
  scheduleDataIsLoadAttempted,
  scheduleDataIsLoadSuccessful,
  scheduleDataIsLoading,
  scheduleDataIsLoadFailure,
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

  if (!isUserSignedIn) {
    return <div>Not signed in</div>;
  }

  if (scheduleDataIsLoadSuccessful) {
    if (Object.keys(currentEvents).length > 0) {
      // const currentScheduleEvent = Object.values(currentEvents)[0];
      return (
        <>
          <Link to={`/schedule/edit`}>Edit Schedule</Link>
          {Object.values(currentEvents).map((scheduleEvent) => {
            return (
              <div>
                <h1>{scheduleEvent.title}</h1>
                <h2>{scheduleEvent.description}</h2>
              </div>
            );
          })}

          {/* <h1>{currentScheduleEvent.currentEvents}</h1>
          <h2>{currentScheduleEvent.currentEvents}</h2> */}
        </>
      );
    }
  } else if (scheduleDataIsLoading) {
    return <div>Loading schedule data.</div>;
  } else if (scheduleDataIsLoadFailure) {
    return <div>Schedule data failed to load.</div>;
  }
  return <div>Nothing</div>;
};

export const DisplayModeRoute = connector(DisplayModeRouteFC);
