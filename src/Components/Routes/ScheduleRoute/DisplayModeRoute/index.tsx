import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { selectEventsForDate, State } from "@Redux";
import { Link } from "react-router-dom";

const mapState = (state: State) => ({
  scheduleData: selectEventsForDate(state, new Date()),
});

const connector = connect(mapState);

type DisplayModeRouteProps = ConnectedProps<typeof connector> & {};

const DisplayModeRouteFC: FC<DisplayModeRouteProps> = ({ scheduleData }) => {
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

  return <div>blah</div>;
};

export const DisplayModeRoute = connector(DisplayModeRouteFC);
