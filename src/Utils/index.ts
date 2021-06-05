export * from "./cx";

export const getPlayersText = (minPlayers: number, maxPlayers: number) => {
  if (maxPlayers === 1) {
    return `1 Player`;
  }
  if (minPlayers === maxPlayers) {
    return `${minPlayers} Players`;
  }
  return `${minPlayers}-${maxPlayers} Players`;
};
