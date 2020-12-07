import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

// import withToggleOnClickReducers from "@hocs/withToggleOnClick/duck/reducers";
import {
  reducers as allReducers,
  makeActionSetSpotifyAccessToken,
  selectSpotifyAccessToken,
} from "@Redux";
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
/*
  Load the spotifyAccessToken from local storage and dispatch
  the set spotify access token action
*/
try {
  const spotifyAccessToken = localStorage.getItem(`spotifyAccessToken`);
  store.dispatch(makeActionSetSpotifyAccessToken(spotifyAccessToken));
} catch (error) {
  console.log(
    `Oh no! Error when trying to read spotifyAccessToken from local storage and dispatch it.`,
  );
}

/*
  Whenever changes occur to spotifyAccessToken in redux
  persist the changes in local storage.
*/
store.subscribe(() => {
  try {
    const spotifyAccessToken = selectSpotifyAccessToken(store.getState());
    localStorage.setItem(`spotifyAccessToken`, spotifyAccessToken);
  } catch (error) {
    console.log(`Oh no! Error when trying to save spotifyAccessToken to local storage.`);
  }
});

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
