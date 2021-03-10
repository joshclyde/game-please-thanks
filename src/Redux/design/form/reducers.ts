import {
  Actions,
  ActionSetFormInputValue,
  SET_FORM_INPUT_VALUE,
  ActionCreateForm,
  CREATE_FORM,
} from "./actions";
import { DesignFormState } from "./types";

const initialState: DesignFormState = {};

const reduceCreateForm = (state: DesignFormState, { payload }: ActionCreateForm) => {
  const { formId } = payload;
  return {
    ...state,
    [formId]: {},
  };
};

const reduceSetFormInputValue = (
  state: DesignFormState,
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

export const form = (state = initialState, action: Actions): DesignFormState => {
  const { type } = action;
  switch (type) {
    case SET_FORM_INPUT_VALUE:
      return reduceSetFormInputValue(state, action as ActionSetFormInputValue);
    case CREATE_FORM:
      return reduceCreateForm(state, action as ActionCreateForm);
  }
  return state;
};
