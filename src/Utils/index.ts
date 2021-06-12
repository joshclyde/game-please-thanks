export const getPlayersText = (minPlayers: number, maxPlayers: number) => {
  if (maxPlayers === 1) {
    return `1 Player`;
  }
  if (minPlayers === maxPlayers) {
    return `${minPlayers} Players`;
  }
  return `${minPlayers}-${maxPlayers} Players`;
};

export * from "./cx";
export * from "./colors";
