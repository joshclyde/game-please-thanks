import React, { FC, useEffect, useCallback } from "react";

import { useUnmountEffect } from "@Hooks";
import { useSelectDoesFormExist, useCreateForm, useDeleteForm } from "@Redux";

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  formId: string;
  initialState: Record<string, string | number | boolean>;
}

const FormFC: FC<Props> = ({ onSubmit, formId, initialState, ...restProps }) => {
  /*
    Initialize the form in redux.
  */
  const doesFormExist = useSelectDoesFormExist(formId);
  const createForm = useCreateForm();
  useEffect(() => {
    if (!doesFormExist) {
      createForm(formId, initialState);
    }
  }, [doesFormExist, createForm, formId, initialState]);

  /*
    Remove form from redux when unmounted.
  */
  const deleteForm = useDeleteForm();
  useUnmountEffect(() => deleteForm(formId));

  const onSubmitPreventDefault = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      // will I ever want the default? probably not
      event.preventDefault();
      // TODO: instead of passing in event, pass in the form's input values
      onSubmit(event);
    },
    [onSubmit],
  );

  /*
    Don't render the form until it has been created.
    This ensures that the initial values have been set before displaying.
    Otherwise the form would display with no initial values for a split second.
  */
  return doesFormExist ? <form {...restProps} onSubmit={onSubmitPreventDefault} /> : null;
};

export const Form = FormFC;
