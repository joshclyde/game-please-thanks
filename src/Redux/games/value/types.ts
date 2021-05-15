export interface Game {
  id: string;
  name: string;
  minPlayers: number;
  maxPlayers: number;
  imageUrl?: string;
  isOnGamePass?: boolean;
}

export type ValueState = Record<string, Game>;