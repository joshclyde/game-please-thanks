export interface SharedFormsState {
  [formId: string]: {
    [inputId: string]: string | number | boolean | Date;
  };
}
