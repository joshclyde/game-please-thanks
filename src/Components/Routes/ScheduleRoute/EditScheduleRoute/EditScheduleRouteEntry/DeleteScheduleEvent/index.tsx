import React, { FC, useState, useCallback } from "react";
import { connect, ConnectedProps } from "react-redux";

import { Button } from "@Design";
import {
  selectScheduleDataEvent,
  State,
  makeThunkDeleteScheduleEvent,
  selectSharedIsLoading,
} from "@Redux";

interface Props {
  scheduleEventId: string;
}

const mapState = (state: State, { scheduleEventId }: Props) => ({
  scheduleEvent: selectScheduleDataEvent(state, scheduleEventId),
  isDeletionInProgress: selectSharedIsLoading(state, scheduleEventId),
});

const mapDispatch = {
  deleteScheduleEvent: makeThunkDeleteScheduleEvent,
};

const connector = connect(mapState, mapDispatch);

type DeleteScheduleEventProps = ConnectedProps<typeof connector> & Props;

const DeleteScheduleEventFC: FC<DeleteScheduleEventProps> = ({
  scheduleEventId,
  deleteScheduleEvent,
  isDeletionInProgress,
}) => {
  const [shouldDisplayConfirmButton, onChangeShouldDisplayConfirmButton] = useState(
    false,
  );
  const onClickDelete = useCallback(() => onChangeShouldDisplayConfirmButton(true), [
    onChangeShouldDisplayConfirmButton,
  ]);
  const onClickNo = useCallback(() => onChangeShouldDisplayConfirmButton(false), [
    onChangeShouldDisplayConfirmButton,
  ]);
  const onClickYes = useCallback(() => deleteScheduleEvent(scheduleEventId), [
    deleteScheduleEvent,
  ]);

  if (isDeletionInProgress) {
    return <p>Deleting event...</p>;
  }

  return shouldDisplayConfirmButton ? (
    <>
      <p>Are you sure you want to delete this event?</p>
      <Button onClick={onClickYes}>Yes</Button>
      <Button onClick={onClickNo}>Cancel</Button>
    </>
  ) : (
    <Button onClick={onClickDelete}>Delete</Button>
  );
};

export const DeleteScheduleEvent = connector(DeleteScheduleEventFC);
