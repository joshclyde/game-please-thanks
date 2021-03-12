import { makeActionSetValue } from "@ReduxUtils";

const {
  isAction: isSetIsAuthenticated,
  useDispatchAction: useSetIsAuthenticated,
} = makeActionSetValue<"IS_AUTHENTICATED", boolean>(`IS_AUTHENTICATED`);

export { isSetIsAuthenticated, useSetIsAuthenticated };
