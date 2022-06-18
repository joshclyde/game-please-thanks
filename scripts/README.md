# Scripts

- scripts
  - /data/games.json: finalized data for all games
  - /data/megaList.json: contains all known product ids
  - /data/gamePass.json: contains raw response from scraping all game pass games
  - /data/rawProduct: scraped data from microsoft for each product we found.
  - /data/game: condensed data for each product we found


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

# Go to firebase console, storage, then upload file and select all images.
# There's like 2000ish games so this kinda freezes my browser.
```

## Future

This would be a good use case for something automated in the cloud. Could be a daily task.

Rather than having a games.json file pushed with the build, I could have all this data in the firestore.

If it was in Firestore, things to consider
- Should I pull all game data in a single request and do any filtering/searching on the client side? Or should the client send a query to the firestore and it respond with the games?
- Pagination Documentation: https://firebase.google.com/docs/firestore/query-data/query-cursors
