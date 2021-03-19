import { AuthState } from "./auth/types";
import { DesignState } from "./design/types";
import { ScheduleState } from "./schedule/types";
import { SharedState } from "./shared/types";
import { SpotifyState } from "./spotify/types";

export interface RootState {
  schedule: ScheduleState;
  shared: SharedState;
  auth: AuthState;
  spotify: SpotifyState;
  design: DesignState;
}
