import { AuthState } from "./auth/types";
import { DesignState } from "./design/types";
import { SharedState } from "./shared/types";

export interface RootState {
  shared: SharedState;
  auth: AuthState;
  design: DesignState;
}
