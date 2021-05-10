import { makeAction } from "@ReduxUtils";

import { Game } from "./types";

const { makeCase: makeCaseSetGame, useDispatchAction: useSetGame } = makeAction(
  `SET_GAME`,
  (game: Game) => ({
    ...game,
  }),
);

export { makeCaseSetGame, useSetGame };
