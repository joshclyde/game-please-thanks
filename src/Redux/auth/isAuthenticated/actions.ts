import { makeAction2 } from "@ReduxUtils";

const {
  makeCase: makeCaseSetIsAuthenticated,
  useDispatchAction: useSetIsAuthenticated,
} = makeAction2(`IS_AUTHENTICATED`, (value: boolean) => ({ value }));

export { makeCaseSetIsAuthenticated, useSetIsAuthenticated };
