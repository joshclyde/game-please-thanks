import { UserProfileFriends, UserProfileGames } from "@Types";

export interface ProfileState {
  uid: string | null;
  hasGamePass: boolean | null;
  name: string | null;
  games: UserProfileGames | null;
  friends: UserProfileFriends | null;
}
