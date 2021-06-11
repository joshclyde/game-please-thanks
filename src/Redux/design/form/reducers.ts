import { makeReducer } from "@ReduxUtils";

import {
  makeCaseCreateFormAction,
  makeCaseSetFormInput,
  makeCaseDeleteFormAction,
} from "./actions";
import { DesignFormState } from "./types";

const initialState: DesignFormState = {};
const { reducer: form, addCase } = makeReducer({ initialState });

addCase(
  makeCaseCreateFormAction((state, { payload }) => {
    const { formId, initialState } = payload;
    return {
      ...state,
      [formId]: {
        ...initialState,
      },
    };
  }),
);

addCase(
  makeCaseSetFormInput((state, { payload }) => {
    const { formId, inputId, value } = payload;
    return {
      ...state,
      [formId]: {
        ...state[formId],
        [inputId]: value,
      },
    };
  }),
);

addCase(
  makeCaseDeleteFormAction((state, { payload }) => {
    const { formId } = payload;
    const { [formId]: _formContents, ...restState } = state;
    return {
      ...restState,
    };
  }),
);

export const reducers = { form };
