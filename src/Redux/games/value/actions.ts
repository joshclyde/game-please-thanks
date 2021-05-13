import { makeAction } from "@ReduxUtils";

import { Game } from "./types";

const { makeCase: makeCaseSetGame, useDispatchAction: useSetGame } = makeAction(
  `SET_GAME`,
  (game: Game) => ({
    ...game,
  }),
);

const {
  makeCase: makeCaseSetGamesValue,
  useDispatchAction: useSetGamesValue,
} = makeAction(`SET_GAMES_VALUE`, (games: Record<string, Game>) => games);

export { makeCaseSetGame, useSetGame, makeCaseSetGamesValue, useSetGamesValue };
