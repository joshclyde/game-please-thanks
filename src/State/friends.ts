import { atom, useAtomValue } from "jotai";

import { filterObject } from "@Utils";

import { currentUserIdAtom } from "./currentUserId";
import { usersAtom } from "./users";

export const friendsAtom = atom((get) => {
  const currentUserId = get(currentUserIdAtom);
  const users = get(usersAtom);
  if (currentUserId == null) {
    return {};
  }
  const friends = users[currentUserId].friends;
  const friendIds = Object.keys(friends).filter((id) => friends[id].isFriend);
  return filterObject(users, friendIds);
});

export const useFriends = () => {
  return useAtomValue(friendsAtom);
};
