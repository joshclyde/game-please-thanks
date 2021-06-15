export interface ProfileState {
  uid: string | null;
  hasGamePass: boolean | null;
  name: string | null;
  games: Record<string, { isOwned: boolean }>;
}
