# Game Please Thanks 🕹

## Production Deploy

```sh
# 1. Build
yarn build
# 2. Copy /public/index.html into build/index.html
# 3. Copy name of main.[id].js to index.html
# 4. Start emulators to test locally
firebase emulators:start
# 5. Deploy to production
firebase deploy --only hosting
```

## Local Testing

```sh
yarn            # install node_modules
yarn start      # run
```

## 📝 Backlog

### 🔥🔥🔥 Highest Priority for Friends Testing

- either dont cache index.html or something

### 🔥 High Priority

- sorting on all list
- redirect gamepleasethanks to www
- (Bug 🐞) Fix pricing for games that don't have a price and have bundles be the way to buy them.
- (Bug 🐞) Check if correct games are appearing when finding games?
- (Bug 🐞) I don't have MageQuit in my games list?


### 💧 Medium Priority

- images and games in a job in the cloud
- make things accessible (tabbing over stuff, etc.)
- handle errors
- don't allow direct use of Link or force use of url constant. basically don't let me just put <Link to="/somewhere">, otherwise if i delete a page i'll have to manually find the locations.
- improve search functionality (e.g. make the text typed in smarter)
- form validation (e.g. name must be more than x characters)
- highlight what matched games when filtering
- have webpack handle index.html

### 🧊 Low priority

- figure out why some images are bad urls
- figure out why yarn makeImages has errors for some
- display something when image doesn't exist
- mock test local environment
- remove lodash
- better loading screen
- improve images
- allow users to enter profile images
- make images lazy load? (don't load until on screen)
- tweak design a bit to be consistent? (e.g. the blue outline)
- make checkbox the original design
- fix centering of ListOfGamesPaginated results

## Discovery
- xbox api? : https://docs.microsoft.com/en-us/gaming/xbox-live/api-ref/xbox-live-rest/uri/atoc-xboxlivews-reference-uris or https://github.com/Microsoft/xbox-live-api/
- tsdoc (https://tsdoc.org/pages/intro/using_tsdoc/, https://api-extractor.com/pages/tsdoc/doc_comment_syntax/, https://github.com/microsoft/tsdoc/tree/master/eslint-plugin)
- firebase config/toggles?: https://firebase.google.com/docs/remote-config

## Redux

- `types.ts`
  - what can types import
    - other types
  - what can types export
    - `SomeState`
- `actions.ts`
  - what can actions import?
    - `import { makeAction } from "@ReduxUtils";`
- `selectors.ts`
  - what can selectors import?
    - `import { RootState } from "@Redux";`
    - `import { makeUseSelector } from "@ReduxUtils";`
    - other `selectors.ts` files
  - what should selectors export?
    - `makeSelect...` functions and `useSelect..` hooks
- `reducers.ts`
  - what can reducers import?
    - `import { makeReducer } from "@ReduxUtils";`
    - `import { reducers as childReducers }` from any children directories with a `reducers.ts`
    - any `makeCase...` functions from any `actions.ts` files
  - what should reducers export?
    -  the `reducers` object
- `hooks.ts`
  - what can hooks import?
    - anything?
  - what should hooks export?
    - `useDispatch...` hooks from the adjacent `actions.ts` file
    - `useSelect...` hooks from the adjacent `selectors.ts` file
    - `export *'` from from any children directories with a `hooks.ts`
