export interface Friend {
  id: string;
  name: string;
  gamesOwned?: Array<string>;
  hasGamePass?: boolean;
}

export type FriendsState = Record<string, Friend>;
