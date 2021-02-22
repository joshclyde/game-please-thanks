import { AuthState } from "./auth/types";
import { FlashcardState } from "./flashcard/types";
import { MusicState } from "./music/types";
import { ScheduleState } from "./schedule/types";
import { SharedState } from "./shared/types";
import { SmiteState } from "./smite/types";

export interface State {
  flashcard: FlashcardState;
  smite: SmiteState;
  schedule: ScheduleState;
  shared: SharedState;
  auth: AuthState;
  music: MusicState;
}
