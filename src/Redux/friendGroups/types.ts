export interface FriendGroup {
  id: string;
  name: string;
  friends: Array<string>;
  games: Array<string>;
}

export type FriendGroupsState = Record<string, FriendGroup>;
