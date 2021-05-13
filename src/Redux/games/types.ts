import { LoadingState } from "@ReduxUtils";

import { ValueState } from "./value/types";

export interface GamesState {
  load: LoadingState;
  value: ValueState;
}
