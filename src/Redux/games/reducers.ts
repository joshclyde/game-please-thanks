import { combineReducers } from "redux";

import { reducers as loadReducers } from "./load/_root";
import { reducers as valueReducers } from "./value/reducers";

const games = combineReducers({
  ...loadReducers,
  ...valueReducers,
});

export const reducers = { games };
