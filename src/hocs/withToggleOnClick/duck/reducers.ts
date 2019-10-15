import { getComponentId, getIsAction } from "./actions";

type stateType = {
  [key: string]: boolean;
};
const initialState: stateType = { hey: true };

const toggleOnClickReducer = (
  state = initialState,
  action: { type: string; payload: { componentId: string } },
) => {
  console.log(action);
  console.log(state);
  console.log("HELLO");
  console.log("HELLO");
  console.log("HELLO");
  console.log("HELLO");
  if (getIsAction(action)) {
    const componentId = getComponentId(action.payload);
    return {
      [componentId]: !state[componentId],
      ...state,
    };
  }
  return { ...state };
};

const reducers = {
  toggleOnClick: toggleOnClickReducer,
};

export default reducers;
