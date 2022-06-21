import { useFormInput } from "@Redux";
import { Game } from "@Types";

export const FORM_ID = `gameSearchForm`;

export const ID = {
  SEARCH_TERM: `searchTerm`,
  PLAYER_COUNT: `playerCount`,
  OWNED_BY_FRIEND: `ownedByFriend`,
  IS_ON_GAME_PASS: `isOnGamePass`,
  SORT_BY: `sortBy`,
};

const sortGames = (
  game1: Game,
  game2: Game,
  field: "maxPlayers" | "minPlayers" | "size" | "name",
  ascending = true,
) => {
  return ascending
    ? game1[field] > game2[field]
      ? 1
      : -1
    : game1[field] < game2[field]
    ? 1
    : -1;
};

export const defaultSort = (game1: Game, game2: Game) => sortGames(game1, game2, `name`);

export const SORT_BY_OPTIONS = [
  {
    value: `nameAscending`,
    content: `Name (Ascending)`,
    sort: defaultSort,
  },
  {
    value: `nameDescending`,
    content: `Name (Descending)`,
    sort: (game1: Game, game2: Game) => sortGames(game1, game2, `name`, false),
  },
  {
    value: `sizeAscending`,
    content: `Size (Ascending)`,
    sort: (game1: Game, game2: Game) => sortGames(game1, game2, `size`),
  },
  {
    value: `sizeDescending`,
    content: `Size (Descending)`,
    sort: (game1: Game, game2: Game) => sortGames(game1, game2, `size`, false),
  },
  {
    value: `minPlayersAscending`,
    content: `Min Players (Ascending)`,
    sort: (game1: Game, game2: Game) => sortGames(game1, game2, `minPlayers`),
  },
  {
    value: `minPlayersDescending`,
    content: `Min Players (Descending)`,
    sort: (game1: Game, game2: Game) => sortGames(game1, game2, `minPlayers`, false),
  },
  {
    value: `maxPlayersAscending`,
    content: `Max Players (Ascending)`,
    sort: (game1: Game, game2: Game) => sortGames(game1, game2, `maxPlayers`),
  },
  {
    value: `maxPlayersDescending`,
    content: `Max Players (Descending)`,
    sort: (game1: Game, game2: Game) => sortGames(game1, game2, `maxPlayers`, false),
  },
];

export const useFormSearchTerm = () => useFormInput(FORM_ID, ID.SEARCH_TERM);
export const useFormPlayerCount = () => useFormInput(FORM_ID, ID.PLAYER_COUNT);
export const useFormOwnedByFriend = () => useFormInput(FORM_ID, ID.OWNED_BY_FRIEND);
export const useFormIsOnGamePass = () => useFormInput(FORM_ID, ID.IS_ON_GAME_PASS);
export const useFormSortBy = () => useFormInput(FORM_ID, ID.SORT_BY);

export const QUERY_PARAM = {
  SEARCH_TERM: `searchTerm`,
  PLAYER_COUNT: `playerCount`,
  OWNED_BY_FRIEND: `ownedByFriend`,
  IS_ON_GAME_PASS: `isOnGamePass`,
  PAGE: `page`,
  SORT_BY: `sort`,
};

export interface SearchParams {
  searchTerm?: string;
  playerCount?: number;
  ownedByFriend?: boolean;
  isOnGamePass?: boolean;
  sortBy?: string;
  page: number;
}

export const makeSearchUrl = ({
  searchTerm,
  playerCount,
  ownedByFriend,
  isOnGamePass,
  page,
  sortBy,
}: SearchParams) => {
  const searchParams = new URLSearchParams();
  searchTerm != null &&
    searchTerm.trim() !== `` &&
    searchParams.append(QUERY_PARAM.SEARCH_TERM, searchTerm);
  playerCount != null &&
    playerCount > 0 &&
    searchParams.append(QUERY_PARAM.PLAYER_COUNT, String(playerCount));
  ownedByFriend &&
    searchParams.append(QUERY_PARAM.OWNED_BY_FRIEND, String(ownedByFriend));
  isOnGamePass && searchParams.append(QUERY_PARAM.IS_ON_GAME_PASS, String(isOnGamePass));
  sortBy && searchParams.append(QUERY_PARAM.SORT_BY, String(sortBy));
  searchParams.append(QUERY_PARAM.PAGE, String(page));
  return `/games?${searchParams.toString()}`;
};
