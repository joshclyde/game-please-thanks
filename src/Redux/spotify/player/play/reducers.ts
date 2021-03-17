import { combineReducers } from "redux";

import { reducers as loadReducers } from "./load/reducers";

const play = combineReducers({
  ...loadReducers,
});

export const reducers = {
  play,
};
