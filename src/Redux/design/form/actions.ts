import { makeAction } from "@ReduxUtils";

const { isAction: isCreateFormAction, useDispatchAction: useCreateForm } = makeAction(
  `CREATE_FORM`,
  (formId: string) => ({
    formId,
  }),
);

const { isAction: isSetFormInput, useDispatchAction: useSetFormInput } = makeAction(
  `SET_FORM_INPUT`,
  (formId: string, inputId: string, value: string | number | boolean | Date) => ({
    formId,
    inputId,
    value,
  }),
);

export { isCreateFormAction, useCreateForm, isSetFormInput, useSetFormInput };
