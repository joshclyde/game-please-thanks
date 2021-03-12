import { makeUseSelector } from "@ReduxUtils";

import { RootState } from "../../types";

const makeSelectDoesFormExist = (formId: string) => (state: RootState) =>
  Boolean(state.design.form?.[formId]);

export const useSelectDoesFormExist = makeUseSelector(makeSelectDoesFormExist);

const makeSelectFormInputValue = (formId: string, inputId: string) => (
  state: RootState,
) => state.design.form?.[formId]?.[inputId];

export const useSelectFormInputValue = makeUseSelector(makeSelectFormInputValue);
