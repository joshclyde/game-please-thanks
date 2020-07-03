import { flashcard } from "./flashcard/reducers";
import { ui } from "./ui/reducers";
import { smite } from "./smite/reducers";
import { shared } from "./shared/reducers";

const reducers = {
  ui,
  flashcard,
  smite,
  shared,
};

export { reducers };
export * from "./flashcard";
export * from "./smite";
export * from "./shared";
export { State } from "./types";
