import { SharedFilterState } from "./filter/types";
import { SharedFormsState } from "./forms/types";
import { SharedLoadingState } from "./loading/types";

export interface SharedState {
  filter: SharedFilterState;
  forms: SharedFormsState;
  loading: SharedLoadingState;
}
