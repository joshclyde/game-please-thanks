import { LoadingState } from "@ReduxUtils";

export interface AuthState {
  isAuthenticated: { value: boolean | undefined; load: LoadingState };
}
