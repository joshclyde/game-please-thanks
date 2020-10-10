import { SharedState } from "../types";

export const selectDoesFormExist = (state: { shared: SharedState }, formId: string) =>
  Boolean(state.shared.forms?.[formId]);

export const selectFormInputValue = (
  state: { shared: SharedState },
  formId: string,
  inputId: string,
) => state.shared.forms?.[formId]?.[inputId];
