export interface UiState {
  width: number;
  height: number;
}

export interface Actions {
  type: string;
  width?: number;
  height?: number;
}
