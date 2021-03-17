import { makeReducer2 } from "@ReduxUtils";

import { makeCaseCreateFormAction, makeCaseSetFormInput } from "./actions";
import { DesignFormState } from "./types";

const initialState: DesignFormState = {};
const { reducer: form, addCase } = makeReducer2({ initialState });

addCase(
  makeCaseCreateFormAction((state, { payload }) => {
    const { formId } = payload;
    return {
      ...state,
      [formId]: {},
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

export const reducers = { form };
