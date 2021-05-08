// Game Please Thanks :)

interface FriendGroup {
  name: string;
  friends: Array<string>;
  games: Array<string>;
}

interface Friend {
  name: string;
  gamesOwned: Array<string>;
  hasGamePass: boolean;
}

interface Game {
  id: string;
  name: string;
  minPlayers: number;
  maxPlayers: number;
  imageUrl?: string;
  isOnGamePass?: boolean;
}

type Games = Array<Game>;

const josh = {
  name: `Josh`,
  gamesOwned: [`1`, `2`, `3`],
};

const games: Games = [
  {
    id: `1`,
    name: `Rocket League`,
    minPlayers: 1,
    maxPlayers: 8,
  },
  {
    id: `2`,
    name: `Smite`,
    minPlayers: 1,
    maxPlayers: 10,
  },
  {
    id: `3`,
    name: `Overwatch`,
    minPlayers: 1,
    maxPlayers: 6,
  },
  {
    id: `4`,
    name: `GTA`,
    minPlayers: 1,
    maxPlayers: 10,
  },
  {
    id: `5`,
    name: `Sea of Thieves`,
    minPlayers: 1,
    maxPlayers: 4,
  },
  {
    id: `6`,
    name: `Overcooked`,
    minPlayers: 1,
    maxPlayers: 4,
  },
  {
    id: `7`,
    name: `Dont Starve`,
    minPlayers: 1,
    maxPlayers: 10,
  },
  {
    id: `8`,
    name: `Ultimate Chicken Horse`,
    minPlayers: 1,
    maxPlayers: 4,
  },
  {
    id: `9`,
    name: `Golf with Friends`,
    minPlayers: 1,
    maxPlayers: 10,
  },
];

/*

  Who's online?
  Friend 1, Friend 2 and Friend 3

  game
    .filter(each online friend has game
    .filter(online friend count between min and max)

  Might be able to scrape this website
  https://www.microsoft.com/en-us/p/smite/c2mhs238pdns?activetab=pivot:overviewtab
  https://www.microsoft.com/en-us/store/top-paid/games/xbox?gameCapabilities=XboxLive&numberOfPlayers=CoopSupportOnline&category=

*/
