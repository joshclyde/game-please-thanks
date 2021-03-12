import { AuthState } from "./auth/types";
import { DesignState } from "./design/types";
import { FlashcardState } from "./flashcard/types";
import { ScheduleState } from "./schedule/types";
import { SharedState } from "./shared/types";
import { SmiteState } from "./smite/types";
import { SpotifyState } from "./spotify/types";

export interface RootState {
  flashcard: FlashcardState;
  smite: SmiteState;
  schedule: ScheduleState;
  shared: SharedState;
  auth: AuthState;
  spotify: SpotifyState;
  design: DesignState;
}
