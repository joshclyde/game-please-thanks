/*
  Utility functions to read/write from any data contained in a file.
*/

import fetch from "node-fetch";

import { writeFile } from "../utils/database";

const getGamePage = (titleId: string) => {
  return fetch(
    `https://account.xbox.com/en-us/GameInfoHub?titleid=${titleId}&selectedTab=achievementsTab&activetab=main:mainTab2`,
    {
      headers: {
        accept: `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9`,
        "accept-language": `en-US,en;q=0.9`,
        "cache-control": `max-age=0`,
        "sec-ch-ua": `" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"`,
        "sec-ch-ua-mobile": `?0`,
        "sec-ch-ua-platform": `"macOS"`,
        "sec-fetch-dest": `document`,
        "sec-fetch-mode": `navigate`,
        "sec-fetch-site": `same-origin`,
        "sec-fetch-user": `?1`,
        "upgrade-insecure-requests": `1`,
        cookie: ``, // TODO: you need to set the cookie here
      },
      referrerPolicy: `strict-origin-when-cross-origin`,
      body: null,
      method: `GET`,
    },
  );
};

/*
  I can get minutes played at this endpoint
  https://account.xbox.com/en-us/GameInfoHub?titleid=94618376&selectedTab=achievementsTab&activetab=main:mainTab2
*/
const execute = async () => {
  // Overwatch: 94618376
  const gamePage = await getGamePage(`94618376`);
  const text = await gamePage.text();
  await writeFile(`overwatch.html`, text);
};

execute();
