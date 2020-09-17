import React, { FC } from "react";
import {
  FormLabel,
  FormTextInput,
  FormCheckbox,
  FormSubmitButton,
  FormDatetime,
} from "@Design";

const AddEventPageFC: FC<{}> = () => {
  return (
    <div>
      <h1>Add Event</h1>

      <FormLabel htmlFor="add-event-title">Title</FormLabel>
      <FormTextInput id="add-event-title" name="add-event-title" />
      <br />

      <FormLabel htmlFor="add-event-description">Description</FormLabel>
      <FormTextInput id="add-event-description" name="add-event-description" />
      <br />

      <FormLabel htmlFor="add-event-routine">Routine</FormLabel>
      <FormCheckbox id="add-event-routine" name="add-event-routine" />
      <br />

      <FormLabel htmlFor="add-event-start-datetime">Start Datetime</FormLabel>
      <input
        type="datetime-local"
        id="add-event-start-datetime"
        name="add-event-start-datetime"
      />
      <br />

      <FormLabel htmlFor="add-event-end-datetime">End Datetime</FormLabel>
      <FormDatetime id="add-event-end-datetime" name="add-event-end-datetime" />
      <br />

      <FormSubmitButton />
      <br />
    </div>
  );
};

export const AddEventPage = AddEventPageFC;
