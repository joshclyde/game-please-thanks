import { makeAction } from "@ReduxUtils";

const {
  makeCase: makeCaseCreateFormAction,
  useDispatchAction: useCreateForm,
} = makeAction(`CREATE_FORM`, (formId: string) => ({
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

export { makeCaseCreateFormAction, useCreateForm, makeCaseSetFormInput, useSetFormInput };
