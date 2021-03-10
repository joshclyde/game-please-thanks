import { DesignState } from "../types";

export const selectDoesFormExist = (state: { design: DesignState }, formId: string) =>
  Boolean(state.design.form?.[formId]);

export const makeSelectDoesFormExist = (formId: string) => (state: {
  design: DesignState;
}) => selectDoesFormExist(state, formId);

export const selectFormInputValue = (
  state: { design: DesignState },
  formId: string,
  inputId: string,
) => state.design.form?.[formId]?.[inputId];

export const makeSelectFormInputValue = (formId: string, inputId: string) => (state: {
  design: DesignState;
}) => selectFormInputValue(state, formId, inputId);
