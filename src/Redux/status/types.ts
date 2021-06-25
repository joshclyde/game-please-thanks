export interface StatusState {
  optimisticUpdateUser: {
    status: string;
    error: string | null;
  };
  loadUsers: {
    status: string;
    error: string | null;
  };
}
