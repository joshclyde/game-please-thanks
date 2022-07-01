import { DesignState } from "./design/types";
import { SharedState } from "./shared/types";

export interface RootState {
  shared: SharedState;
  design: DesignState;
}
