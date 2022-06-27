/*
  Eventually, don't just have this named Data.
*/
export interface Data {
  accounts: Record<
    string,
    {
      gamesPlayed: Array<string>;
    }
  >;
}
