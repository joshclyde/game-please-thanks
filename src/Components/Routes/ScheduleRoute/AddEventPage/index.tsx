import React, { FC, useCallback, useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  FormLabel,
  FormTextInput,
  FormCheckbox,
  FormSubmitButton,
  FormDatetime,
} from "@Design";
import { Form } from "@DesignRedux";
import {
  makeActionCreateForm,
  State,
  selectFormInputValue,
  makeThunkAddScheduleEvent,
  selectSharedIsLoading,
} from "@Redux";

const formId = `add-event-page-form`;
const formTitleId = `add-event-title`;
const formRoutineId = `add-event-routine`;
const formMondayId = `add-event-monday`;
const formTuesdayId = `add-event-tuesday`;
const formWednesdayId = `add-event-wednesday`;
const formThursdayId = `add-event-thursday`;
const formFridayId = `add-event-friday`;
const formSaturdayId = `add-event-saturday`;
const formSundayId = `add-event-sunday`;
const formDescriptionId = `add-event-description`;
const formStartDatetimeId = `add-event-start-datetime`;
const formEndDatetimeId = `add-event-end-datetime`;

const mapState = (state: State) => ({
  // TODO: get rid of all this casting
  title: selectFormInputValue(state, formId, formTitleId) as string,
  description: selectFormInputValue(state, formId, formDescriptionId) as string,
  startDatetime: selectFormInputValue(state, formId, formStartDatetimeId) as Date,
  endDatetime: selectFormInputValue(state, formId, formEndDatetimeId) as Date,
  routine: selectFormInputValue(state, formId, formRoutineId) as boolean,
  monday: Boolean(selectFormInputValue(state, formId, formMondayId) as boolean),
  tuesday: Boolean(selectFormInputValue(state, formId, formTuesdayId) as boolean),
  wednesday: Boolean(selectFormInputValue(state, formId, formWednesdayId) as boolean),
  thursday: Boolean(selectFormInputValue(state, formId, formThursdayId) as boolean),
  friday: Boolean(selectFormInputValue(state, formId, formFridayId) as boolean),
  saturday: Boolean(selectFormInputValue(state, formId, formSaturdayId) as boolean),
  sunday: Boolean(selectFormInputValue(state, formId, formSundayId) as boolean),
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
  routine,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
  addScheduleEvent,
  isFormSubmitting,
  isFormSubmissionSuccessful,
}) => {
  const onSubmitForm = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      addScheduleEvent(
        formId,
        routine
          ? {
              title,
              description,
              startDatetime,
              endDatetime,
              routine: {
                monday,
                tuesday,
                wednesday,
                thursday,
                friday,
                saturday,
                sunday,
              },
            }
          : { title, description, startDatetime, endDatetime },
      );
      event.preventDefault();
    },
    [
      addScheduleEvent,
      title,
      description,
      startDatetime,
      endDatetime,
      routine,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
    ],
  );

  const [hasNavigated, setHasNavigated] = useState(false);
  const history = useHistory();
  useEffect(() => {
    if (isFormSubmissionSuccessful) {
      if (!hasNavigated) {
        setHasNavigated(true);
        history.push(`/schedule`);
      }
    }
  }, [isFormSubmissionSuccessful, history, hasNavigated, setHasNavigated]);

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

        <FormLabel htmlFor={formRoutineId}>Routine</FormLabel>
        <FormCheckbox id={formRoutineId} name={formRoutineId} formId={formId} />
        <br />

        {routine ? (
          <>
            <FormLabel htmlFor={formMondayId}>Monday</FormLabel>
            <FormCheckbox id={formMondayId} name={formMondayId} formId={formId} />
            <br />
            <FormLabel htmlFor={formTuesdayId}>Tuesday</FormLabel>
            <FormCheckbox id={formTuesdayId} name={formTuesdayId} formId={formId} />
            <br />
            <FormLabel htmlFor={formWednesdayId}>Wednesday</FormLabel>
            <FormCheckbox id={formWednesdayId} name={formWednesdayId} formId={formId} />
            <br />
            <FormLabel htmlFor={formThursdayId}>Thursday</FormLabel>
            <FormCheckbox id={formThursdayId} name={formThursdayId} formId={formId} />
            <br />
            <FormLabel htmlFor={formFridayId}>Friday</FormLabel>
            <FormCheckbox id={formFridayId} name={formFridayId} formId={formId} />
            <br />
            <FormLabel htmlFor={formSaturdayId}>Saturday</FormLabel>
            <FormCheckbox id={formSaturdayId} name={formSaturdayId} formId={formId} />
            <br />
            <FormLabel htmlFor={formSundayId}>Sunday</FormLabel>
            <FormCheckbox id={formSundayId} name={formSundayId} formId={formId} />
            <br />
          </>
        ) : null}

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
