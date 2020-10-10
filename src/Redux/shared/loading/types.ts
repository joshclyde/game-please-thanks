export interface SharedLoadingState {
  [key: string]: {
    isLoading: boolean;
    isLoadSuccessful: boolean;
    isLoadFailure: boolean;
  };
}
