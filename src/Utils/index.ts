export const getPlayersText = (minPlayers: number, maxPlayers: number) => {
  if (maxPlayers === 1) {
    return `Single Player`;
  }
  if (minPlayers === maxPlayers) {
    return `${minPlayers} players`;
  }
  return `${minPlayers}-${maxPlayers} players`;
};

export * from "./cx";
export * from "./colors";
export * from "./fns";
