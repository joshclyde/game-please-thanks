import * as React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

// import withToggleOnClickReducers from "@hocs/withToggleOnClick/duck/reducers";
import { reducers as allReducers } from "@Redux";
// import { setSize } from "@Redux";

import { BookmarksRoute } from "./BookmarksRoute";
import { FlashcardsRoute } from "./FlashcardsRoute";
import { SmiteRoute } from "./SmiteRoute";

const reducers = combineReducers({
  // ...withToggleOnClickReducers,
  ...allReducers,
});

// https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
// this line is so i can see the redux store
// tslint:disable-next-line: no-any
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// everytime the browser resizes the width and height in redux adjusts accordingly
// window.addEventListener("resize", () => {
//   store.dispatch(setSize(window.innerWidth, window.innerHeight));
// });

const App = () => (
  // <div>
  <Provider store={store}>
    {/* TODO make innerWidth and innerHeight redux */}
    {/* <div> */}
    <Switch>
      <Route path="/flashcards" component={FlashcardsRoute} />
      <Route path="/bookmarks" component={BookmarksRoute} />
      <Route path="/smite" component={SmiteRoute} />
      <Route path="/" component={BookmarksRoute} />
      {/* <Route path="/" component={HomePage} /> */}
    </Switch>
    {/* </div> */}
  </Provider>
  // </div>
);

export default App;
