/*
  key = MicrosoftProduct.ProductId | MicrosoftProduct.GroupId
  value = Game.id

  Since I'm going to name each Game file with its own uuid, this mapping
  will help me easily find the Game file for a MicrosoftProduct.
*/
export type MicrosoftProductMapping = Record<string, string>;
