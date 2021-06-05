import axios, { AxiosError } from "axios";

import { GamePassResponse } from "../types";
import { writeGamePassResponseToFile } from "../utils";

// All Console Game Pass Games: https://catalog.gamepass.com/sigls/v2?id=f6f1f99f-9b49-4ccd-b3bf-4d9767a77f5e&language=en-us&market=US

const scrapeMicrosoftGamePass = async () => {
  try {
    const url = `https://catalog.gamepass.com/sigls/v2?id=f6f1f99f-9b49-4ccd-b3bf-4d9767a77f5e&language=en-us&market=US`;
    const response = await axios.get<GamePassResponse>(url);
    await writeGamePassResponseToFile(response.data);
    console.log(`Successfully scraped game pass data.`);
  } catch (error) {
    console.log(`Error scraping. ${error.data}`);
  }
};

const execute = async () => {
  await scrapeMicrosoftGamePass();
};

execute();
