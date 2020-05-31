import { FlashcardState } from "./flashcard/types";
import { UiState } from "./ui/types";

export interface State {
  ui: UiState;
  flashcard: FlashcardState;
}
