import { combineReducers } from "redux";

import { reducers as loadReducers } from "./load/reducers";
import { reducers as valueReducers } from "./value/reducers";

export const reducers = {
  devices: combineReducers({
    ...loadReducers,
    ...valueReducers,
  }),
};
