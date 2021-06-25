import { useCallback } from "react";

import { useUnmountEffect } from "@Hooks";

import { useSetFormInput, useDeleteForm } from "./actions";
import { useSelectFormInputValue } from "./selectors";

// TODO: do i like this name? kinda similar to useState, so maybe rename
// TODO: can i have a helper function to make this?
export const useFormInput = (
  formId: string,
  inputId: string,
): [
  string | number | boolean | Date,
  (value: string | number | boolean | Date) => void,
] => {
  const value = useSelectFormInputValue(formId, inputId);
  const setValueGeneric = useSetFormInput();
  const setValue = useCallback(
    (value: string | number | boolean | Date) => {
      setValueGeneric(formId, inputId, value);
    },
    [formId, inputId, setValueGeneric],
  );
  return [value, setValue];
};

export const useDeleteFormOnUnmount = (formId: string) => {
  const deleteForm = useDeleteForm();
  useUnmountEffect(() => deleteForm(formId));
};

export { useCreateForm, useSetFormInput, useDeleteForm } from "./actions";
export {
  useSelectDoesFormExist,
  useSelectFormInputValue,
  useSelectFormValues,
} from "./selectors";
