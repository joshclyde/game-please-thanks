# Scripts


- scripts
  - /data/games.json: finalized data for all games
  - /data/megaList.json: contains all known product ids
  - /data/gamePass.json: contains raw response from scraping all game pass games
  - /data/rawProduct: scraped data from microsoft for each product we found.
  - /data/game: condensed data for each product we found

## MegaList.json

Stores every product ID I have ever scraped. This list is an ongoing accumulation of product IDs and I will continually update it. Do not delete this! Eventually I may store it somewhere other than git, probably if I ever have a daily/weekly job in the cloud to scrape new games.

## 100% scrape everything you can

1. scrapeRecoPublic, scrapeStoreSearch, scrapeGamePass
2. scrapeProducts
3. scrapeBundles

## Product IDs

scrapes for all product ids

## How do I want to store all game data?

For now, let's say that it will be local. MegaList.json will be stored in git, but maybe I will store all the product data outside of my git repo so that it is disconnected.

For now, let's say I am going make a games.[contentHash].json file that will have all the game data needed, be loaded on the client and then the client can do anything it wants to without me worrying about firestore querying. games.json will be cached.

Same with all the images.

## Firebase (or local for now)

What data do I want to store in firebase?

There is a last modified date that I could use for things. Such as if the game has not been modified for over a year then maybe I shouldn't worry about checking for updates.

If I decide to store all the games in firebase, I would not want to query all of them at one time. I would want to do queries that limit the number of results (e.g. first 10, match search term, minPlayers is greater than a number, etc.). When figuring out which sets of friends can play games though, that may be a bit more complicated.

```ts
interface Game {
  name: string;
  minPlayers: number;
  maxPlayers: number;
  externalUrl: string;
  images: {
    // ???????
    TitledWide: {
      url: string;
    };
    TitledLong: {
      url: string;
    };
    UntitledWide: {
      url: string;
    };
    UntitledSquare: {
      url: string;
    };
    TitledSquare: {
      url: string;
    };
  };
  price: number;
  isOnGamePass: boolean; // isOnGamePass is not pulled from microsoft product
  size: number;
  lastModified: FirestoreTimestamp;
}
```

## How to Update Game Data

```sh
# Before doing any commands make sure you have the following directories and files
# /scripts/data
# /scripts/data/rawProduct
# /scripts/data/megaList.json with { "productIds": [] }

# After doing the above, run these commands

# Scraping and downloading all the microsoft data
yarn downloadMicrosoftProductData

# Parsing through the locally saved microsoft data to create `games.json` with the minimum necessary data
yarn makeGameData

# Copy `games.json` to the `assets` folder. Then, when you do a build and deploy it will push the file
# to firebase. Currently, `games.json` is an asset when publishing the build instead of saving all of
# the games in a database.
```

## How to Update Images

```sh
# Download all images from microsoft
# This will take many minutes. ~10 minutes
yarn downloadImagesFromMicrosoft

# Create new images to be used on gamepleasethanks.com
# This will take many minutes. ~5 minutes
yarn makeImages

# Copy all the images into the assets/images folder.
```

## Future

This would be a good use case for something automated in the cloud. Could be a daily task.

Rather than having a games.json file pushed with the build, I could have all this data in the firestore.

If it was in Firestore, things to consider
- Should I pull all game data in a single request and do any filtering/searching on the client side? Or should the client send a query to the firestore and it respond with the games?
- Pagination Documentation: https://firebase.google.com/docs/firestore/query-data/query-cursors

## Some games are not able to be scraped

Some games (MageQuit) for some reason are not on the list of xbox games, even when searching through the Xbox games catalog. However, there is a search function for the entire Microsoft site that I can use to search for these missing games and get results. Even better, there's an API for it. Using this, I can make some functionality for users to search for games that are not currently in the game catalog and have them be added.

https://www.microsoft.com/msstoreapiprod/api/autosuggest?market=en-us&clientId=7F27B536-CF6B-4C65-8638-A0F8CBDFCA65&sources=Microsoft-Terms%2CIris-Products%2CDCatAll-Products&filter=%2BClientType%3AStoreWeb&counts=5%2C1%2C5&query=magequit

Finally found a real page where I can see everything. I think all the service calls are happening on the server instead of the client, so I can't find an exact endpoint to hit for querying. But I should be able to just parse the html to get everything. Just do a search for every letter in the alphabet, that should work I think.

https://www.microsoft.com/en-us/store/search/games?q=magequit&devicetype=xbox

Get any "data-pid"
