/*
  This will scrape product ids from the
  https://www.microsoft.com/en-us/store/search/games?q=${q}&devicetype=xbox&skipItems=${skipItems}
  url. This url is for the microsoft store for all devices, including
  PC and some other weird devices. However, I will only be
  scrpaing for xbox.

  This page does not do any requests from the client to get data, but instead
  does it all on the server side. So instead of hitting endpoint to get the
  exact data we are getting the html from the url and parsing it to get the
  product ids.

  The current approach is to do a query for every letter. You'd think
  that would get you about every game there is, however that is not true.
  An example is the game "Unrailed!". When doing a search for the letter 'u',
  Unrailed is not returned. In fact, only 33 products are returned. Which is
  odd because when I do a query with 'i' we get the max of 2000 products
  being returned. TLDR this method is not perfect and does not get you
  everything you want. But it gets us some stuff we would not be getting
  through the other ways.
*/

import { addToMegaList } from "../utils/database";

/*
  Found this on stack overflow. Returns true if the string only contains
  letters and numbers. Figured I'd use this to filter out any values that
  the scraping think it found but really aren't product ids.

  I think that the way filterIds is parsing for the ids that it should only
  be getting real product ids. But there were originally some ways to scrape
  the product ids that were getting more than just the 90 results shown on
  the page when I decided this function could be useful.
*/
const onlyLettersAndNumbers = (str: string) => {
  return /^[A-Za-z0-9]*$/.test(str);
};

/*
  This gets us an array of all the ids that the page is displaying.
*/
const filterIds = (data: string): Array<string> => {
  return (
    data
      .split(`data-m='{"pid":"`)
      .map((x) => x.slice(0, 12))
      // .split(`data-pid`)
      // .map((x) => x.slice(2, 14))
      .filter((x) => onlyLettersAndNumbers(x))
      .map((x) => x.toUpperCase())
  );
};

/*
  This is not the number of games displayed on the page, this is the
  total number of games that the server found that matched the q field.

  Currently, I am parsing this value from the <title> tag which is what
  is shown as the name of the tab.
*/
const filterTotal = (data: string): number => {
  return Number(data.split(`<title>Games (`)[1].split(`)`)[0]);
};

const scrapePage = async (url: string) => {
  const data = (await (await fetch(url)).json()) as string;

  const total = filterTotal(data);
  const ids = filterIds(data);
  addToMegaList(ids);
  console.log(`${ids.length} IDS | Total ${total} | Page ${url}\n`);
  return { total, ids };
};

const createUrl = (q: string, skipItems: number) =>
  `https://www.microsoft.com/en-us/store/search/games?q=${q}&devicetype=xbox&skipItems=${skipItems}`;

/*
  I thought about doing every vowel, thinking that would get me most of the games.
  But since the server querying logic for this is not what I expected, going to
  do every single letter instead.
*/
const qs = [
  `a`,
  `b`,
  `c`,
  `d`,
  `e`,
  `f`,
  `g`,
  `h`,
  `i`,
  `j`,
  `k`,
  `l`,
  `m`,
  `n`,
  `o`,
  `p`,
  `q`,
  `r`,
  `s`,
  `t`,
  `u`,
  `v`,
  `w`,
  `x`,
  `y`,
  `z`,
];

export const scrapeProductIdsFromStoreSearch = async () => {
  /*
    Collecing all errors that were thrown so that after the script runs
    I will know which iterations failed, and if I want can manually modify
    the script to retry them.

    If the first scrape iteration fails, then the entire script will stop
    executing. Could change this eventually.
  */
  let errors: Array<{
    q: string;
    total: number;
    skipItems: number;
    e: any;
  }> = [];
  for (const q of qs) {
    // Always do a first scrape iteration for a q
    const { total } = await scrapePage(createUrl(q, 0));
    // Keep iterating +90 items until reached the total
    for (let skipItems = 90; skipItems < total; skipItems += 90) {
      try {
        await scrapePage(createUrl(q, skipItems));
      } catch (e) {
        errors.push({ q, total, skipItems, e });
        console.log(
          `Error! Will display at end, but it was for url ${createUrl(q, skipItems)}`,
        );
      }
    }
  }

  /*
    Outputting the errros that were caught when iterating.
  */
  console.log(`Here are the errors that occured`);
  errors.forEach((value) => {
    console.log(
      `Q: ${value.q}\nTotal: ${value.total}\nSkip Items: ${value.skipItems}\nError: ${value.e}`,
    );
  });
};
