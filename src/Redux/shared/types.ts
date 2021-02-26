import { SharedFilterState } from "./filter/types";
import { SharedLoadingState } from "./loading/types";

export interface SharedState {
  filter: SharedFilterState;
  loading: SharedLoadingState;
}
