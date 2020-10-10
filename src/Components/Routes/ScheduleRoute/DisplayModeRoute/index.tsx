import React, { FC, useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import {
  selectEventsForDate,
  State,
  selectScheduleDataIsLoading,
  selectScheduleDataIsLoadSuccessful,
  selectScheduleDateIsLoadAttempted,
  makeThunkFetchUserDataSchedule,
} from "@Redux";
import { Link } from "react-router-dom";
import {
  startFirebaseEventListening,
  getSchedule,
  signInUserThroughGoogle,
  getIsUserSignedIn,
  signOutUser,
  consoleLogCurrentUser,
} from "@Firebase";

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

  console.log(`Schedule Data`);
  console.log(scheduleData);

  if (Object.keys(scheduleData).length === 1) {
    const currentScheduleEvent = Object.values(scheduleData)[0];
    return (
      <>
        <Link to={`/schedule/edit`}>Edit Schedule</Link>
        <h1>{currentScheduleEvent.title}</h1>
        <h2>{currentScheduleEvent.description}</h2>
        <button onClick={getSchedule}>Click Me</button>
        <button onClick={signInUserThroughGoogle}>Sign In Through Google</button>
        <button onClick={getIsUserSignedIn}>Is User Signed In</button>
        <button onClick={consoleLogCurrentUser}>Console Log Current User</button>
        <button onClick={signOutUser}>Log Out</button>
      </>
    );
  }

  if (isUserSignedIn) {
    return <div>Signed in but Ugh ugh ugh</div>;
  }
  return <div>Not signed in</div>;
};

export const DisplayModeRoute = connector(DisplayModeRouteFC);
