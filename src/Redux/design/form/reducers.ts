import { makeReducer } from "@ReduxUtils";

import { isCreateFormAction, isSetFormInput } from "./actions";
import { DesignFormState } from "./types";

const initialState: DesignFormState = {};
const form = makeReducer({ initialState });

form.makeCase(isCreateFormAction, (state, { payload }) => {
  const { formId } = payload;
  return {
    ...state,
    [formId]: {},
  };
});
form.makeCase(isSetFormInput, (state, { payload }) => {
  const { formId, inputId, value } = payload;
  return {
    ...state,
    [formId]: {
      ...state[formId],
      [inputId]: value,
    },
  };
});

export const reducers = { form };
