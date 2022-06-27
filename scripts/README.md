# Scripts

This directory contains alll the stuff to scrape data from microsoft and generate data to be used on gamepleasethanks.

## How to Scrape Everything

Run `yarn scripts ./scripts/execute/[yourScript].ts` for each of the following scripts, in this order.

1. scrapeRecoPublic, scrapeStoreSearch, scrapeGamePass
    * Will get you any new product IDs the scripts can find from their various sources.
    * `MegaList.json`` is stored in git so you should already have a large list of product IDs, so unless you are wanting to get your MegaList.json to have new product IDs then I would not worry about running this.
    * The order when running these 3 scripts does not matter.
2. scrapeProducts
    * Scrapes the product data for each product ID in MegaList.json
3. scrapeBundles
    * Adds any unknown product IDs found in bundled products to MegaList.json and scrapes the products for those new product IDs
4. createGamesJson
    * Using all the product data, creates the `games.json` file which is the file used on the site with the minimum amount of data needed
5. scrapeImages
    * Scrapes/downloads all product images
6. createImages
    * Using the product images, creates the gamepleasethanks images

After everything is scraped and created, copy the following files/directories into the `assets` folder
- `/scripts/data/games.json`
- `/scripts/data/gameImage/` (but set the directory name to `/assets/images`)

## MegaList.json

Stores every product ID I have ever scraped. This list is an ongoing accumulation of product IDs and I will continually update it. Do not delete this! Eventually I may store it somewhere other than git, probably if I ever have a daily/weekly job in the cloud to scrape new games.

## GamePass.json

Stores all product IDs that are on game pass. This is reset every time so really I shouldn't need it in git, but for now it's fine.

## Other Data

Other than MegaList.json and GamePass.json, scripts will generate files into `/scripts/data/`. These files are not include in git.

| File/Directory      | Description |
| ----------- | ----------- |
| /data/games.json | entire database for games data. to be used in assets folder in firebase hosting       |
| /data/gameImage/[id].jpeg | generated games images to be used in assets folder in firebase hosting        |
| /data/game/[id].json | same as games.json, but split out by id. only generated so that the dev can easily find game data.        |
| /data/product/[id].json | product data scraped from microsoft        |
| /data/productImage/[id].jpeg | product image scraped from microsoft        |

## Future

- scraping in the cloud instead of locally?
- games.json in firestore?
- there is a search url that will work best to use for specific games that I have not found scraping. if game stuff was not local and instead was on the cloud then i could have a feature for people to look for games that I don't currently have scraped `https://www.microsoft.com/msstoreapiprod/api/autosuggest?market=en-us&clientId=7F27B536-CF6B-4C65-8638-A0F8CBDFCA65&sources=Microsoft-Terms%2CIris-Products%2CDCatAll-Products&filter=%2BClientType%3AStoreWeb&counts=5%2C1%2C5&query=magequit`
