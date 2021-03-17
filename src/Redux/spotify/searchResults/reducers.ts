import { combineReducers } from "redux";

import { reducers as loadReducers } from "./load/reducers";
import { reducers as valueReducers } from "./value/reducers";

const searchResults = combineReducers({
  ...loadReducers,
  ...valueReducers,
});

export const reducers = {
  searchResults,
};
