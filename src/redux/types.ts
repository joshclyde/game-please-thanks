import { FlashcardState } from "./flashcard/types";
import { UiState } from "./ui/types";
import { SmiteState } from "./smite/types";
import { ScheduleState } from "./schedule/types";
import { SharedState } from "./shared/types";

export interface State {
  ui: UiState;
  flashcard: FlashcardState;
  smite: SmiteState;
  schedule: ScheduleState;
  shared: SharedState;
}
