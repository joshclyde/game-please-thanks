import { combineReducers } from "redux";

import { form } from "./form/reducers";
import { reducers as iconTabsReducers } from "./iconTabs/reducers";

export const design = combineReducers({
  form,
  ...iconTabsReducers,
});
