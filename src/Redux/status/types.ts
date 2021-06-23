export interface StatusState {
  optimisticUpdateUserProfile: {
    status: string;
    error: string | null;
  };
  loadUsers: {
    status: string;
    error: string | null;
  };
}
