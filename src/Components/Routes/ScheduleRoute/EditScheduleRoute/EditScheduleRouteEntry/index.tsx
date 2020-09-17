import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { selectScheduleDataEvent, State } from "@Redux";

import "./index.css";

interface Props {
  scheduleEventId: string;
}

const mapState = (state: State, { scheduleEventId }: Props) => ({
  scheduleEvent: selectScheduleDataEvent(state, scheduleEventId),
});

const connector = connect(mapState);

type EditScheduleRouteEntryProps = ConnectedProps<typeof connector> & {};

const EditScheduleRouteEntryFC: FC<EditScheduleRouteEntryProps> = ({
  scheduleEvent: { title, description, startDatetime, endDatetime, routine },
}) => {
  return (
    <div className="EditScheduleRouteEnty">
      <p>{title}</p>
      <p>{description}</p>
      <p>
        {startDatetime.toLocaleString()} - {endDatetime.toLocaleString()}
      </p>
      <p>{routine}</p>
    </div>
  );
};

export const EditScheduleRouteEntry = connector(EditScheduleRouteEntryFC);
