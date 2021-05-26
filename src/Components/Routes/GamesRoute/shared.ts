import { useFormInput } from "@Redux";

export const FORM_ID = `gameSearchForm`;

export const ID = {
  SEARCH_TERM: `searchTerm`,
  PLAYER_COUNT: `playerCount`,
  OWNED_BY_FRIEND: `ownedByFriend`,
  IS_ON_GAME_PASS: `isOnGamePass`,
};

export const useFormSearchTerm = () => useFormInput(FORM_ID, ID.SEARCH_TERM);
export const useFormPlayerCount = () => useFormInput(FORM_ID, ID.PLAYER_COUNT);
export const useFormOwnedByFriend = () => useFormInput(FORM_ID, ID.OWNED_BY_FRIEND);
export const useFormIsOnGamePass = () => useFormInput(FORM_ID, ID.IS_ON_GAME_PASS);

export const QUERY_PARAM = {
  SEARCH_TERM: `searchTerm`,
  PLAYER_COUNT: `playerCount`,
  OWNED_BY_FRIEND: `ownedByFriend`,
  IS_ON_GAME_PASS: `isOnGamePass`,
  PAGE: `page`,
};

export interface SearchParams {
  searchTerm?: string;
  playerCount?: number;
  ownedByFriend?: boolean;
  isOnGamePass?: boolean;
  page: number;
}

export const makeSearchUrl = ({
  searchTerm,
  playerCount,
  ownedByFriend,
  isOnGamePass,
  page,
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
  searchParams.append(QUERY_PARAM.PAGE, String(page));
  return `/games?${searchParams.toString()}`;
};
