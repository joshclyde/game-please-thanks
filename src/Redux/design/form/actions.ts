import { makeAction } from "@ReduxUtils";

type InputValue = string | number | boolean;

const {
  makeCase: makeCaseCreateFormAction,
  useDispatchAction: useCreateForm,
} = makeAction(
  `CREATE_FORM`,
  (formId: string, initialState: Record<string, InputValue>) => ({
    formId,
    initialState,
  }),
);

const {
  makeCase: makeCaseDeleteFormAction,
  useDispatchAction: useDeleteForm,
} = makeAction(`DELETE_FORM`, (formId: string) => ({
  formId,
}));

const { makeCase: makeCaseSetFormInput, useDispatchAction: useSetFormInput } = makeAction(
  `SET_FORM_INPUT`,
  (formId: string, inputId: string, value: string | number | boolean | Date) => ({
    formId,
    inputId,
    value,
  }),
);

export {
  makeCaseCreateFormAction,
  useCreateForm,
  makeCaseSetFormInput,
  useSetFormInput,
  makeCaseDeleteFormAction,
  useDeleteForm,
};
