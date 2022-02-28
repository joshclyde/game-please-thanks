# Game Please Thanks 🕹

## How to deploy

```sh
yarn build
# then, copy+paste public/index.html into build/
firebase deploy
```
## How to run

```sh
yarn            # install node_modules
yarn start      # run
```

## Backlog

## MVP
- finalized images
- load all users?
- add/delete friends
- ensure security rules are acceptable
- sort basically everything
- test going directly to each url to make sure they all still work

## Bugs
- Fix pricing for games that don't have a price and have bundles be the way to buy them.
- Check if correct games are appearing when finding games?

## Follow-up MVP
- document a lot of stuff?
- mock test local environment
- jotai?
- make things accessible (tabbing over stuff, etc.)
- handle errors
- don't allow direct use of Link or force use of url constant. basically don't let me just put <Link to="/somewhere">, otherwise if i delete a page i'll have to manually find the locations.
- daily/weekly job to update games database
- wait for friends to load
- improve search functionality (e.g. make the text typed in smarter)
- create 404 page
- form validation (e.g. name must be more than x characters)

## Codebase Clean up
- organize components into proper folders (Common/Design)
- figure out how i want to organize firebase directory
- make firebase code better (e.g. better utility functions, don't cast)
- consistent naming for Profile or UserProfile
- lodash build stuff (i don't even see this in the build???????????)

## Discovery
- xbox api? : https://docs.microsoft.com/en-us/gaming/xbox-live/api-ref/xbox-live-rest/uri/atoc-xboxlivews-reference-uris or https://github.com/Microsoft/xbox-live-api/
- tsdoc (https://tsdoc.org/pages/intro/using_tsdoc/, https://api-extractor.com/pages/tsdoc/doc_comment_syntax/, https://github.com/microsoft/tsdoc/tree/master/eslint-plugin)

## Enhancements
- loading spinner
- keep improving images
- make a /login and /logout page?
- allow users to enter profile images
- make images lazy load? (don't load until on screen)
- tweak design a bit to be consistent? (e.g. the blue outline)
- make checkbox the original design
- fix centering of ListOfGamesPaginated results

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
