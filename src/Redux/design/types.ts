import { DesignFormState } from "./form/types";
import { DesignIconTabsState } from "./iconTabs/types";

export interface DesignState {
  form: DesignFormState;
  iconTabs: DesignIconTabsState;
}
