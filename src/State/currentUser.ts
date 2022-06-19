import { atom, useAtomValue } from "jotai";

import { currentUserIdAtom } from "./currentUserId";
import { usersAtom } from "./users";

export const currentUserAtom = atom((get) => {
  const currentUserId = get(currentUserIdAtom);
  if (currentUserId == null) {
    return null;
  }
  return get(usersAtom)[currentUserId];
});

export const useCurrentUser = () => {
  return useAtomValue(currentUserAtom);
};

export const useConfidentCurrentUser = () => {
  const currentUser = useAtomValue(currentUserAtom);
  if (currentUser == null) {
    throw new Error(`Bad`);
  }
  return currentUser;
};
