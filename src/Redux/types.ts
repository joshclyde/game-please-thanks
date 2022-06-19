import { DesignState } from "./design/types";
import { SettingsState } from "./settings/types";
import { SharedState } from "./shared/types";

export interface RootState {
  shared: SharedState;
  design: DesignState;
  settings: SettingsState;
}
