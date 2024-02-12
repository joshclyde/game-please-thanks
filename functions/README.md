# Functions

## How to deploy

In root directory, run the following


Todo
- scrape product pages
- scrape search

## Trying to document what I have so far

Basically I want to take some time to understand what I have so far, and then figure out a plan to get it working.

It will be SUPER VALUABLE if I can get the fetching of games in the cloud on a recurring basis, that's like getting it across the finish line tbh.

So, right now I believe I am basically trying to put the fetching of everything inside of a cloud function. Then, on a recurring basis, trigger that cloud function to update the games.

### How to test?

Do the following to start firebase locally

```sh
# 1. Build
yarn build
# 2. Copy /public/index.html into build/index.html
# 3. Copy name of main.[id].js to index.html
# 4. Start emulators to test locally
firebase emulators:start
```

Then, the output of the command should basically tell you everything you need.
You can open up the log output for all firbease stuff.
Then trigger the cloud function by hitting it in chrome.




