import React, { FC, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import {
  selectScheduleDataIds,
  State,
  selectScheduleDataIsLoading,
  selectScheduleDataIsLoadSuccessful,
  selectScheduleDateIsLoadAttempted,
  makeThunkFetchUserDataSchedule,
} from "@Redux";
import { EditScheduleRouteEntry } from "./EditScheduleRouteEntry";
import { Link } from "react-router-dom";

const mapState = (state: State) => ({
  scheduleEventIds: selectScheduleDataIds(state),
  scheduleDataIsLoadAttempted: selectScheduleDateIsLoadAttempted(state),
  scheduleDataIsLoading: selectScheduleDataIsLoading(state),
  scheduleDataIsLoadSuccessful: selectScheduleDataIsLoadSuccessful(state),
});

const mapDispatch = {
  fetchUserDataSchedule: makeThunkFetchUserDataSchedule,
};

const connector = connect(mapState, mapDispatch);

type EditScheduleRouteProps = ConnectedProps<typeof connector> & {};

const EditScheduleRouteFC: FC<EditScheduleRouteProps> = ({
  scheduleEventIds,
  scheduleDataIsLoadAttempted,
  fetchUserDataSchedule,
  scheduleDataIsLoadSuccessful,
}) => {
  useEffect(() => {
    if (!scheduleDataIsLoadAttempted) {
      fetchUserDataSchedule();
    }
  }, [scheduleDataIsLoadAttempted, fetchUserDataSchedule]);

  return scheduleDataIsLoadSuccessful ? (
    <div>
      {scheduleEventIds.map((id) => (
        <EditScheduleRouteEntry key={id} scheduleEventId={id} />
      ))}
      <Link to={`/schedule/add`}>Add New Event</Link>
    </div>
  ) : (
    <div>Loading</div>
  );
};

export const EditScheduleRoute = connector(EditScheduleRouteFC);
