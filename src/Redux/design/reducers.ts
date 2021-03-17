import { combineReducers } from "redux";

import { reducers as formReducers } from "./form/reducers";
import { reducers as iconTabsReducers } from "./iconTabs/reducers";

const design = combineReducers({
  ...formReducers,
  ...iconTabsReducers,
});

export const reducers = {
  design,
};
