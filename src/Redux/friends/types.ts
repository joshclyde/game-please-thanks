// /users/${uid}/hasGamePass

export interface Friend {
  id: string;
  name: string;
  gamesOwned?: Array<string>;
  hasGamePass?: boolean;
  imageUrl?: string;
}

export type FriendsState = Record<string, Friend>;
