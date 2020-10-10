export const CREATE_FORM = `CREATE_FORM`;
export const makeActionCreateForm = (formId: string) => ({
  type: CREATE_FORM,
  payload: {
    formId,
  },
});
export type ActionCreateForm = ReturnType<typeof makeActionCreateForm>;

export const SET_FORM_INPUT_VALUE = `SET_FORM_INPUT_VALUE`;
export const makeActionSetFormInputValue = (
  formId: string,
  inputId: string,
  value: string | number | boolean | Date,
) => ({
  type: SET_FORM_INPUT_VALUE,
  payload: {
    formId,
    inputId,
    value,
  },
});
export type ActionSetFormInputValue = ReturnType<typeof makeActionSetFormInputValue>;

export type Actions = ActionSetFormInputValue | ActionCreateForm;
