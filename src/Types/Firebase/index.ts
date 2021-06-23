export interface UserProfileFriendEntity {
  isFriend: boolean;
}

export type UserProfileFriends = Record<string, UserProfileFriendEntity>;

export interface UserProfileGameEntity {
  isOwned: boolean;
}

export type UserProfileGames = Record<string, UserProfileGameEntity>;

export type UserProfileName = string;

export type UserProfileHasGamePass = boolean;

export interface UserProfile {
  name: UserProfileName;
  hasGamePass: UserProfileHasGamePass;
  games: UserProfileGames;
  friends: UserProfileFriends;
}
