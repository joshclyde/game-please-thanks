import { atom, PrimitiveAtom } from "jotai";
import { loadable } from "jotai/utils";

import { getAllUsers } from "@Firebase";
import { UserProfile } from "@Types";

// I could use the Suspense component instead of loadable
export const usersAtom = loadable(
  atom<Promise<Record<string, PrimitiveAtom<UserProfile>>>>(async () => {
    const fetchedUsers = await getAllUsers();
    const retValue: Record<string, PrimitiveAtom<UserProfile>> = {};
    Object.entries(fetchedUsers).forEach(([userId, user]) => {
      retValue[userId] = atom(user);
    });
    return retValue;
  }),
);

export const allUsersAtom = atom((get) => {
  const users = get(usersAtom);
  if (users.state === `hasData`) {
    const retValue: Record<string, UserProfile> = {};
    Object.entries(users.data).forEach(([id, user]) => {
      retValue[id] = get(user);
    });
    return retValue;
  }
  return {};
});
