import axios from "axios";

import { GamePassResponse } from "../types";
import { setGamePassProductIds, addToMegaList } from "../utils/database";

const hasId = (
  value,
): value is {
  id: string;
} => `id` in value;

export const scrapeProductIdsFromGamePass = async () => {
  const { data } = await axios.get<GamePassResponse>(
    `https://catalog.gamepass.com/sigls/v2?id=f6f1f99f-9b49-4ccd-b3bf-4d9767a77f5e&language=en-us&market=US`,
  );
  const productIds = data.filter(hasId).map(({ id }) => id);
  await addToMegaList(productIds);
  await setGamePassProductIds(productIds);
};
