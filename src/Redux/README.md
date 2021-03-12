# Redux

Patterns for my redux files.

## No index files

The only index file allowed is the root `Redux/index.ts` file. Instead of importing from index files, inner files should import directly from other files (e.g. `import { someSelector } from './domain/selectors`)

## Exclusively export hooks and reducers?

Not sure if this will be viable, but for now I only want to export the reducers (so that the app can create the store) and hooks. The hooks will handle dispatching actions and getting values form state, so theoretically there shouldn't be a need to export action creators and selectors. Unless I have a need for redux stuff outside a react component then I'm hoping hooks will be enough.

## @ReduxUtils

Starting to make some factory functions in the `ReduxUtils` directory. So far I like it and handles a lot of boilerplater code. I probably could find a library to do all of it but it's fun to make my own. Redux has a [toolkit library](https://redux-toolkit.js.org/) that seems to be similar.

## TODO

Need to refactor some of this redux state to be the set pattern.

- [x] auth
- [ ] design
- [ ] flashcard
- [ ] spotify
- [ ] schedule
- [ ] shared
- [ ] smite
- [ ] youtube

Is there a way to have type safety around ensuring there are no duplicate action types? Not sure how feasible that is or how neccesary.
