import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { selectScheduleDataIds, State } from "@Redux";
import { EditScheduleRouteEntry } from "./EditScheduleRouteEntry";
import { Link } from "react-router-dom";

const mapState = (state: State) => ({
  scheduleEventIds: selectScheduleDataIds(state),
});

const connector = connect(mapState);

type EditScheduleRouteProps = ConnectedProps<typeof connector> & {};

const EditScheduleRouteFC: FC<EditScheduleRouteProps> = ({ scheduleEventIds }) => {
  return (
    <div>
      {scheduleEventIds.map((id) => (
        <EditScheduleRouteEntry key={id} scheduleEventId={id} />
      ))}
      <Link to={`/schedule/add`}>Add New Event</Link>
    </div>
  );
};

export const EditScheduleRoute = connector(EditScheduleRouteFC);
