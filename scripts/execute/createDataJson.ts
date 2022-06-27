import { readJson as fsReadJson } from "fs-extra";

import { Title, TitleHub, Data } from "../types";
import { getMicrosoftProducts, setData } from "../utils/database";

const readTitleHub = async (accountId: string): Promise<Array<Title>> => {
  const data: TitleHub = await fsReadJson(`./scripts/data/titleHub/${accountId}.json`);
  return (
    data.GameItems?.map((gameData) => {
      return new Title(gameData);
    }) || []
  );
};

/*
  This is a WIP script.

  For now, this script creates a /data/data.json file. This data.json file
  will contain an array of productIds for each user. And that array will
  be product ids that the user has played (not neccesarily own).
*/
const execute = async () => {
  /*
    Array of strings for each file in /data/titleHub/[fileName].json
    that you want added to data.json.

    (I could just read the file names instead of explicitly having them here)
  */
  const accountIds = [`josh`, `ryan`];
  const data: Data = { accounts: {} };
  const products = await getMicrosoftProducts();
  for (const accountId of accountIds) {
    data.accounts[accountId] = { gamesPlayed: [] };
    const titles = await readTitleHub(accountId);
    /*
      For each title listed in the titleHub file,
      check whether it is an xbox game and whether we have
      a corresponding productId for it.

      If so, add it to the array of games for that user.
    */
    titles
      .filter((title) => title.isXbox)
      .forEach((title) => {
        const product = Object.values(products).find((product) => {
          return product.AlternateIds?.some((altId) => altId.Value === title.titleId);
        });
        if (product) {
          data.accounts[accountId].gamesPlayed.push(product.ProductId);
        }
      });
  }
  await setData(data);
};

execute();
