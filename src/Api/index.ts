import { Game } from "@Types";

export const requestGames = async () => {
  const response = await fetch(`/assets/games.json`);
  return (await response.json()) as Record<string, Game>;
};
