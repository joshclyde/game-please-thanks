export const requestGames = async () => {
  const response = await fetch(`/assets/games.json`);
  return response.json();
};
