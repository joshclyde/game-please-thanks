import { form } from "./form/reducers";
import { DesignState } from "./types";

const initialState: DesignState = {
  form: {},
};

export const design = (state = initialState, action: any): DesignState => {
  return {
    ...state,
    form: form(state.form, action),
  };
};
