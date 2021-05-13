export interface FriendGroup {
  id: string;
  name: string;
  friends: Array<string>;
}

export type FriendGroupsState = Record<string, FriendGroup>;
