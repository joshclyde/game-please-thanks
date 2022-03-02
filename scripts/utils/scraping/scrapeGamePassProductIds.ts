import axios, { AxiosError } from "axios";

import { writeGamePassResponseToFile, appendProductIdsToMegaList } from "../";
import { GamePassResponse } from "../../types";

const hasId = (
  value,
): value is {
  id: string;
} => `id` in value;

// All Console Game Pass Games: https://catalog.gamepass.com/sigls/v2?id=f6f1f99f-9b49-4ccd-b3bf-4d9767a77f5e&language=en-us&market=US
export const scrapeGamePassProductIds = async () => {
  try {
    const url = `https://catalog.gamepass.com/sigls/v2?id=f6f1f99f-9b49-4ccd-b3bf-4d9767a77f5e&language=en-us&market=US`;
    const response = await axios.get<GamePassResponse>(url);
    await writeGamePassResponseToFile(response.data);
    const productIds = response.data.filter(hasId);
    console.log(`Successfully scraped game pass data.`);
    return productIds.map(({ id }) => id);
  } catch (error) {
    console.log(`Error scraping. ${error.data}`);
    throw error;
  }
};
