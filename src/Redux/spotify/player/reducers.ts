import { combineReducers } from "redux";

import { reducers as loadReducers } from "./_root";
import { reducers as playReducers } from "./play/reducers";

const player = combineReducers({
  ...loadReducers,
  ...playReducers,
});

export const reducers = { player };
