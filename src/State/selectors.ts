import { useAtomValue, useAtom } from "jotai";
import { useCallback } from "react";

import { updateUserData, updateProfileGames, updateProfileFriends } from "@Firebase";
import { UserProfileFriendEntity } from "@Types";

import { useCurrentUser } from "./currentUser";
import { currentUserIdAtom } from "./currentUserId";
import { useFriends } from "./friends";
import { useUsers, useUser, updatedUsersAtom } from "./users";

export const useCurrentUserId = () => {
  const currentUserId = useAtomValue(currentUserIdAtom);
  return currentUserId;
};

export const useIsFriend = (userId: string) => {
  const friends = useFriends();
  return Object.keys(friends).includes(userId);
};

export const useUsersNameMaybeYou = (userId: string) => {
  const currentUserId = useCurrentUserId();
  const { name } = useUser(userId);
  return currentUserId === userId ? `${name} (you)` : name;
};

export const useIsGameOwned = (gameId: string) => {
  const currentUser = useCurrentUser();
  return Boolean(currentUser && currentUser.games[gameId]?.isOwned);
};

export const useGamesOwnedIds = () => {
  const currentUser = useCurrentUser();
  return !currentUser
    ? []
    : Object.keys(currentUser.games).filter(
        (gameId) => currentUser.games[gameId].isOwned,
      );
};

export const useCurrentUserIdAndFriendIdsSortedByName = () => {
  const currentUserId = useCurrentUserId();
  const currentUser = useCurrentUser();
  const friends = useFriends();
  if (currentUserId && currentUser) {
    const users = { ...friends, [currentUserId]: currentUser };
    return Object.keys(users).sort((userId1, userId2) => {
      return users[userId1].name.localeCompare(users[userId2].name);
    });
  }
  return [];
};

export const useCurrentUserAndFriendIdsThatOwnGame = (gameId: string) => {
  const userIds = useCurrentUserIdAndFriendIdsSortedByName();
  const users = useUsers();
  return userIds.filter((userId) => Boolean(users[userId]?.games[gameId]?.isOwned));
};

export const useFilteredUserIds = ({ searchTerm }: { searchTerm: string }) => {
  const users = useUsers();
  return Object.keys(users).filter((userId) =>
    users[userId].name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
};

/*
  For now, all updates are under the assumption that they are successful
*/
export const useUpdateCurrentUser = () => {
  const currentUserId = useCurrentUserId();
  const currentUser = useCurrentUser();
  const [updatedUsers, setUpdatedUsers] = useAtom(updatedUsersAtom);

  return useCallback(
    async (user: { hasGamePass: boolean; name: string }) => {
      if (currentUserId && currentUser) {
        setUpdatedUsers({
          ...updatedUsers,
          [currentUserId]: {
            ...currentUser,
            name: user.name,
            hasGamePass: user.hasGamePass,
          },
        });
        await updateUserData({ uid: currentUserId, ...user });
      } else {
        throw new Error(`Tried to update current user when not signed in`);
      }
    },
    [currentUser, currentUserId, updatedUsers, setUpdatedUsers],
  );
};

export const useUpdateGameIsOwned = () => {
  const currentUserId = useCurrentUserId();
  const currentUser = useCurrentUser();
  const [updatedUsers, setUpdatedUsers] = useAtom(updatedUsersAtom);

  return useCallback(
    async (gameId: string, isOwned: boolean) => {
      if (currentUserId && currentUser) {
        setUpdatedUsers({
          ...updatedUsers,
          [currentUserId]: {
            ...currentUser,
            games: {
              ...currentUser.games,
              [gameId]: {
                isOwned,
              },
            },
          },
        });
        await updateProfileGames({
          uid: currentUserId,
          games: { [gameId]: { isOwned } },
        });
      } else {
        throw new Error(`Tried to update current user when not signed in`);
      }
    },
    [currentUser, currentUserId, updatedUsers, setUpdatedUsers],
  );
};

export const useUpdateCurrentUsersFriend = () => {
  const currentUserId = useCurrentUserId();
  const currentUser = useCurrentUser();
  const [updatedUsers, setUpdatedUsers] = useAtom(updatedUsersAtom);

  return useCallback(
    async (friendId: string, friend: UserProfileFriendEntity) => {
      if (currentUserId && currentUser) {
        setUpdatedUsers({
          ...updatedUsers,
          [currentUserId]: {
            ...currentUser,
            friends: {
              ...currentUser.friends,
              [friendId]: friend,
            },
          },
        });
        await updateProfileFriends({
          uid: currentUserId,
          friends: { [friendId]: friend },
        });
      } else {
        throw new Error(`Tried to update current user when not signed in`);
      }
    },
    [currentUser, currentUserId, updatedUsers, setUpdatedUsers],
  );
};
