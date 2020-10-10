import {
  Actions,
  ActionSetFormInputValue,
  SET_FORM_INPUT_VALUE,
  ActionCreateForm,
  CREATE_FORM,
} from "./actions";
import { SharedFormsState } from "./types";

const initialState: SharedFormsState = {};

const reduceCreateForm = (state: SharedFormsState, { payload }: ActionCreateForm) => {
  const { formId } = payload;
  return {
    ...state,
    [formId]: {},
  };
};

const reduceSetFormInputValue = (
  state: SharedFormsState,
  { payload }: ActionSetFormInputValue,
) => {
  const { formId, inputId, value } = payload;
  return {
    ...state,
    [formId]: {
      ...state[formId],
      [inputId]: value,
    },
  };
};

export const forms = (state = initialState, action: Actions): SharedFormsState => {
  const { type } = action;
  switch (type) {
    case SET_FORM_INPUT_VALUE:
      return reduceSetFormInputValue(state, action as ActionSetFormInputValue);
    case CREATE_FORM:
      return reduceCreateForm(state, action as ActionCreateForm);
  }
  return state;
};
