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

# ?????? /assets/games.json
```
## Images?????

