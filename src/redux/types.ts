import { FlashcardState } from "./flashcard/types";
import { UiState } from "./ui/types";
import { SmiteState } from "./smite/types";
import { SharedState } from "./shared/types";

export interface State {
  ui: UiState;
  flashcard: FlashcardState;
  smite: SmiteState;
  shared: SharedState;
}
