import React, { FC, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Form,
  FormLabel,
  FormTextInput,
  FormCheckbox,
  FormSubmitButton,
  FormDatetime,
} from "@Design";
import { connect, ConnectedProps } from "react-redux";
import {
  makeActionCreateForm,
  State,
  selectFormInputValue,
  makeThunkAddScheduleEvent,
  selectSharedIsLoading,
  selectSharedIsLoadSuccessful,
} from "@Redux";

const formId = `add-event-page-form`;
const formTitleId = `add-event-title`;
const formDescriptionId = `add-event-description`;
const formStartDatetimeId = `add-event-start-datetime`;
const formEndDatetimeId = `add-event-end-datetime`;

const mapState = (state: State) => ({
  title: selectFormInputValue(state, formId, formTitleId) as string,
  description: selectFormInputValue(state, formId, formDescriptionId) as string,
  startDatetime: selectFormInputValue(state, formId, formStartDatetimeId) as Date,
  endDatetime: selectFormInputValue(state, formId, formEndDatetimeId) as Date,
  isFormSubmitting: selectSharedIsLoading(state, formId),
  isFormSubmissionSuccessful: selectSharedIsLoading(state, formId),
});

const mapDispatch = {
  createForm: makeActionCreateForm,
  addScheduleEvent: makeThunkAddScheduleEvent,
};

const connector = connect(mapState, mapDispatch);

interface OuterProps {}
interface Props extends OuterProps, ConnectedProps<typeof connector> {}

const AddEventPageFC: FC<Props> = ({
  title,
  description,
  startDatetime,
  endDatetime,
  addScheduleEvent,
  isFormSubmitting,
  isFormSubmissionSuccessful,
}) => {
  const onSubmitForm = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      addScheduleEvent(formId, { title, description, startDatetime, endDatetime });
      event.preventDefault();
    },
    [title, description, startDatetime, endDatetime],
  );

  let hasNavigated = false;
  const history = useHistory();
  useEffect(() => {
    if (isFormSubmissionSuccessful) {
      if (!hasNavigated) {
        hasNavigated = true;
        history.push(`/schedule`);
      }
    }
  }, [isFormSubmissionSuccessful, history]);

  return (
    <div>
      <h1>Add Event</h1>
      <Form onSubmit={onSubmitForm} formId={formId}>
        <FormLabel htmlFor={formTitleId}>Title</FormLabel>
        <FormTextInput id={formTitleId} name={formTitleId} formId={formId} />
        <br />

        <FormLabel htmlFor={formDescriptionId}>Description</FormLabel>
        <FormTextInput id={formDescriptionId} name={formDescriptionId} formId={formId} />
        <br />

        {/* <FormLabel htmlFor="add-event-routine">Routine</FormLabel>
        <FormCheckbox id="add-event-routine" name="add-event-routine" formId={formId} />
        <br /> */}

        <FormLabel htmlFor={formStartDatetimeId}>Start Datetime</FormLabel>
        <FormDatetime
          id={formStartDatetimeId}
          name={formStartDatetimeId}
          formId={formId}
        />
        <br />

        <FormLabel htmlFor={formEndDatetimeId}>End Datetime</FormLabel>
        <FormDatetime id={formEndDatetimeId} name={formEndDatetimeId} formId={formId} />
        <br />

        <FormSubmitButton
          disabled={isFormSubmitting ? true : false}
          value={isFormSubmitting ? `Submitting...` : undefined}
        />
        <br />
      </Form>
    </div>
  );
};

export const AddEventPage = connector(AddEventPageFC);
