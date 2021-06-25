import { AuthState } from "./auth/types";
import { DesignState } from "./design/types";
import { GamesState } from "./games/types";
import { SettingsState } from "./settings/types";
import { SharedState } from "./shared/types";
import { StatusState } from "./status/types";
import { UsersState } from "./users/types";

export interface RootState {
  shared: SharedState;
  auth: AuthState;
  design: DesignState;
  games: GamesState;
  settings: SettingsState;
  status: StatusState;
  users: UsersState;
}
