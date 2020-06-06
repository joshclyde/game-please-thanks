import { flashcard } from "./flashcard/reducers";
import { ui } from "./ui/reducers";
import { smite } from "./smite/reducers";

const reducers = {
  ui,
  flashcard,
  smite,
};

export { reducers };
export * from "./flashcard";
export * from "./smite";
export { State } from "./types";
