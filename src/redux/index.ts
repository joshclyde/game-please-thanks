import { flashcard } from "./flashcard/reducers";
import { ui } from "./ui/reducers";

const reducers = {
  ui,
  flashcard,
};

export { reducers };
export * from "./flashcard";
export { State } from "./types";
