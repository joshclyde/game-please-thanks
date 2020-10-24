import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

// import withToggleOnClickReducers from "@hocs/withToggleOnClick/duck/reducers";
import { reducers as allReducers } from "@Redux";
// import { setSize } from "@Redux";

import { AuthRoutes } from "./AuthRoutes";

const reducers = combineReducers({
  // ...withToggleOnClickReducers,
  ...allReducers,
});

// https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
// this line is so i can see the redux store
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// everytime the browser resizes the width and height in redux adjusts accordingly
// window.addEventListener("resize", () => {
//   store.dispatch(setSize(window.innerWidth, window.innerHeight));
// });

export const App = () => (
  // <div>
  <Provider store={store}>
    {/* TODO make innerWidth and innerHeight redux */}
    <AuthRoutes />
  </Provider>
  // </div>
);
