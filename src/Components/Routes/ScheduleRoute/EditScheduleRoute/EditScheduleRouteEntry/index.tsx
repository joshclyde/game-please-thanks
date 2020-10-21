import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";

import { selectScheduleDataEvent, State } from "@Redux";

import { DeleteScheduleEvent } from "./DeleteScheduleEvent";
import "./index.css";

interface Props {
  scheduleEventId: string;
}

const mapState = (state: State, { scheduleEventId }: Props) => ({
  scheduleEvent: selectScheduleDataEvent(state, scheduleEventId),
});

const connector = connect(mapState);

type EditScheduleRouteEntryProps = ConnectedProps<typeof connector> & Props;

const EditScheduleRouteEntryFC: FC<EditScheduleRouteEntryProps> = ({
  scheduleEventId,
  scheduleEvent: { title, description, startDatetime, endDatetime, routine },
}) => {
  const isRoutine = Boolean(routine);
  const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } =
    routine || {};
  return (
    <div className="EditScheduleRouteEnty">
      <h3>{title}</h3>
      <p>{description}</p>
      {!isRoutine ? (
        <>
          <p>
            <b>Start Datetime:</b> {startDatetime.toLocaleString()}
          </p>
          <p>
            <b>End Datetime:</b> {endDatetime.toLocaleString()}
          </p>
        </>
      ) : null}
      {isRoutine ? (
        <>
          <p>
            <b>Time:</b> {startDatetime.toLocaleTimeString()} -{` `}
            {endDatetime.toLocaleTimeString()}
          </p>
          <p>
            {monday ? <b>M </b> : `M `}
            {tuesday ? <b>Tu </b> : `Tu `}
            {wednesday ? <b>W </b> : `W `}
            {thursday ? <b>Th </b> : `Th `}
            {friday ? <b>F </b> : `F `}
            {saturday ? <b>Sa </b> : `Sa `}
            {sunday ? <b>Su </b> : `Su `}
          </p>
        </>
      ) : null}
      <DeleteScheduleEvent scheduleEventId={scheduleEventId} />
    </div>
  );
};

export const EditScheduleRouteEntry = connector(EditScheduleRouteEntryFC);
