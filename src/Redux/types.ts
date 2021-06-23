import { AuthState } from "./auth/types";
import { DesignState } from "./design/types";
import { FriendGroupsState } from "./friendGroups/types";
import { FriendsState } from "./friends/types";
import { GamesState } from "./games/types";
import { ProfileState } from "./profile/types";
import { SettingsState } from "./settings/types";
import { SharedState } from "./shared/types";
import { StatusState } from "./status/types";
import { UsersState } from "./users/types";

export interface RootState {
  shared: SharedState;
  auth: AuthState;
  design: DesignState;
  games: GamesState;
  friendGroups: FriendGroupsState;
  settings: SettingsState;
  friends: FriendsState;
  profile: ProfileState;
  status: StatusState;
  users: UsersState;
}
