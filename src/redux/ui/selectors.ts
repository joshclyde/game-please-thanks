import { State } from "../types";
import { UiState } from "./types";

const getUi = (state: State) => state.ui || ({} as UiState);
const getWidth = (state: State) => getUi(state).width;
const getHeight = (state: State) => getUi(state).height;

export const selectors = {
  getUi,
  getWidth,
  getHeight,
};
