import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import { reducers as allReducers } from "../src/Redux";

const reducers = combineReducers({
  ...allReducers,
});

// https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
// this line is so i can see the redux store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// TODO: don't copy/paste store logic, instead have store exportable and pull it in
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <link
        href="https://fonts.googleapis.com/css?family=Varela+Round:400"
        rel="stylesheet"
      />
      <style>{`* { font-family:'Varela Round'; }`}</style>
      <Story />
    </Provider>
  ),
];

export const parameters = {
  backgrounds: {
    default: `dark-theme-background`,
    values: [
      {
        name: `dark-theme-background`,
        value: `#0D0D0D`,
      },
      {
        name: `dark-theme-contrast-background`,
        value: `#1A1A1A`,
      },
      {
        name: `dark-theme-text`,
        value: `#CCCCCC`,
      },
      {
        name: `dark-theme-mellow-text`,
        value: `#8C8C8C`,
      },
    ],
  },
};
