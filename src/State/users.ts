import { atom, useAtomValue } from "jotai";
import { loadable } from "jotai/utils";

import { getAllUsers } from "@Firebase";
import { UserProfile } from "@Types";

export const fetchedUsersAtom = loadable(
  atom<Promise<Record<string, UserProfile>>>(async () => {
    const fetchedUsers = await getAllUsers();
    const retValue: Record<string, UserProfile> = {};
    Object.entries(fetchedUsers).forEach(([userId, user]) => {
      retValue[userId] = user;
    });
    return retValue;
  }),
);

export const updatedUsersAtom = atom<Record<string, UserProfile>>({});

export const usersAtom = atom((get) => {
  const fetchedUsers = get(fetchedUsersAtom);
  if (fetchedUsers.state != `hasData`) {
    throw new Error(`Fix this someday`);
  }
  return {
    ...fetchedUsers.data,
    ...get(updatedUsersAtom),
  };
});

export const useLoadUsers = () => {
  const { state } = useAtomValue(fetchedUsersAtom);
  return state;
};

export const useUsers = () => {
  const users = useAtomValue(usersAtom);
  return users;
};

export const useUser = (userId: string) => {
  const users = useUsers();
  return users[userId];
};

// import { atom, PrimitiveAtom, useAtomValue } from "jotai";
// import { loadable } from "jotai/utils";

// import { getAllUsers } from "@Firebase";
// import { UserProfile } from "@Types";

// // I could use the Suspense component instead of loadable
// export const usersAtom = loadable(
//   atom<Promise<Record<string, PrimitiveAtom<UserProfile>>>>(async () => {
//     const fetchedUsers = await getAllUsers();
//     const retValue: Record<string, PrimitiveAtom<UserProfile>> = {};
//     Object.entries(fetchedUsers).forEach(([userId, user]) => {
//       retValue[userId] = atom(user);
//     });
//     return retValue;
//   }),
// );

// export const allUsersAtom = atom((get) => {
//   const users = get(usersAtom);
//   if (users.state === `hasData`) {
//     const retValue: Record<string, UserProfile> = {};
//     Object.entries(users.data).forEach(([id, user]) => {
//       retValue[id] = get(user);
//     });
//     return retValue;
//   }
//   return {};
// });
