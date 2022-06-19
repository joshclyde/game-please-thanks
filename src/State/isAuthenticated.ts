import { atom, useAtomValue } from "jotai";

import { currentUserIdAtom } from "./currentUserId";

export const isAuthenticatedAtom = atom((get) => {
  return get(currentUserIdAtom) != null;
});

export const useIsAuthenticated = () => {
  return useAtomValue(isAuthenticatedAtom);
};
