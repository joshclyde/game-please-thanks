import { GamePassResponse } from "../types";
import { addToMegaList, setGamePassProductIds } from "../utils/database";

const hasId = (
  value: any,
): value is {
  id: string;
} => `id` in value;

export const scrapeProductIdsFromGamePass = async () => {
  const data = (await (
    await fetch(
      `https://catalog.gamepass.com/sigls/v2?id=f6f1f99f-9b49-4ccd-b3bf-4d9767a77f5e&language=en-us&market=US`,
    )
  ).json()) as GamePassResponse;
  const productIds = data.filter(hasId).map(({ id }) => id);
  setGamePassProductIds(productIds);
  addToMegaList(productIds);
};
