import { atom, useAtomValue } from "jotai";
import { loadable } from "jotai/utils";

import { requestGames } from "@Api";
import { Game } from "@Types";

const gamesAtom = loadable(
  atom<Promise<Record<string, Game>>>(async () => {
    const fetchedGames = await requestGames();
    const retValue: Record<string, Game> = {};
    Object.entries(fetchedGames).forEach(([id, game]) => {
      retValue[id] = game;
    });
    return retValue;
  }),
);

export const useLoadGames = () => {
  const { state } = useAtomValue(gamesAtom);
  return state;
};

export const useGame = (gameId: string) => {
  const games = useAtomValue(gamesAtom);
  if (games.state != `hasData`) {
    throw new Error(`Fix this someday`);
  }
  return games.data[gameId];
};

export const useGames = () => {
  const games = useAtomValue(gamesAtom);
  if (games.state != `hasData`) {
    throw new Error(`Fix this someday`);
  }
  return games.data;
};

// I could use the Suspense component instead of loadable
// export const gamesAtom = loadable(
//   atom<Promise<Record<string, PrimitiveAtom<Game>>>>(async () => {
//     const fetchedGames = await requestGames();
//     const retValue: Record<string, PrimitiveAtom<Game>> = {};
//     Object.entries(fetchedGames).forEach(([id, game]) => {
//       retValue[id] = atom(game);
//     });
//     return retValue;
//   }),
// );

// export const allGamesAtom = atom((get) => {
//   const games = get(gamesAtom);
//   if (games.state === `hasData`) {
//     const retValue: Record<string, Game> = {};
//     Object.entries(games.data).forEach(([id, game]) => {
//       retValue[id] = get(game);
//     });
//     return retValue;
//   }
//   return {};
// });
