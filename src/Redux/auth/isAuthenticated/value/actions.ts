import { makeAction } from "@ReduxUtils";

const {
  makeCase: makeCaseSetIsAuthenticated,
  useDispatchAction: useSetIsAuthenticated,
} = makeAction(`IS_AUTHENTICATED`, (value: boolean) => ({ value }));

export { makeCaseSetIsAuthenticated, useSetIsAuthenticated };
