import { useAtomValue } from "jotai";

import { filterObject } from "@Utils";

import { currentUserIdAtom } from "./currentUserId";
import { allUsersAtom } from "./users";

export const useFriends = () => {
  const currentUserId = useAtomValue(currentUserIdAtom);
  const users = useAtomValue(allUsersAtom);
  if (Object.keys(users).length > 0 && currentUserId) {
    const friends = users[currentUserId].friends;
    const friendIds = Object.keys(friends).filter((id) => friends[id].isFriend);
    return filterObject(users, friendIds);
  }
  return {};
};
