import { scrapeProductPages } from "../scrape/scrapeProductPages";

/*
  Scrapes the html from a product page.

  This does take a while and some requests will fail,
  which is why I am defaulting `soft: true` instead of
  scraping every one each time.
*/
const execute = async () => {
  await scrapeProductPages({ soft: true });
  // await scrapeProductPages([
  //   `9P6F6TBGGVK3`, // risk of rain,
  //   `9P2N57MC619K`, // sea of thieves,
  //   `BQ7NMRJT1NQ4`, // don't starve me,
  //   `9NBLGGH537BL`, // minecraft,
  //   `BPQ955FQFPH6`, // destiny 2,
  //   `C2MHS238PDNS`, // smite,
  //   `BNG91PT95LQN`, // monster hunter,
  //   `BPQZT43FWD49`, // gang beasts,
  //   `BPK4ZKFCFL5G`, // halo,
  //   `C125W9BG2K0V`, // rocket league,
  //   `C1C4DZJPBC2V`, // overwatch,
  //   `BNNMLWZRNQF6`, // ultimate chicken horse,
  //   `C21TDXKRNMHZ`, // halo wars 2,
  //   `C10GWTNNNBZ8`, // castle crashers,
  //   `9NKJ0VZQ4N0L`, // it takes two,
  //   `C0GWTPD0S8S1`, // star wars 2,
  //   `BPJ686W6S0NH`, // gta v,
  //   `C2JQRC2C49B0`, // destiny,
  //   `9MT6TG9CXR2H`, // FAILING
  // ]);
};

execute();
