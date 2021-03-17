import { makeAction2 } from "@ReduxUtils";

const {
  makeCase: makeCaseCreateFormAction,
  useDispatchAction: useCreateForm,
} = makeAction2(`CREATE_FORM`, (formId: string) => ({
  formId,
}));

const {
  makeCase: makeCaseSetFormInput,
  useDispatchAction: useSetFormInput,
} = makeAction2(
  `SET_FORM_INPUT`,
  (formId: string, inputId: string, value: string | number | boolean | Date) => ({
    formId,
    inputId,
    value,
  }),
);

export { makeCaseCreateFormAction, useCreateForm, makeCaseSetFormInput, useSetFormInput };
