export type SharedLoadingState = Record<
  string,
  {
    isLoading: boolean;
    isLoadSuccessful: boolean;
    isLoadFailure: boolean;
    error?: Error;
  }
>;
