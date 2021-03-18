import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { ThemeProvider } from "styled-components";

import { reducers, useSelectSpotifyAccessToken, useSetSpotifyAccessToken } from "@Redux";

import { AuthRoutes } from "./AuthRoutes";

// https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
// this line is so i can see the redux store
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

const useSubscribeSpotifyAccessTokenToLocalStorage = () => {
  const [isCopiedFromLocal, setIsCopiedFromLocal] = useState(false);
  const setSpotifyAccessToken = useSetSpotifyAccessToken();
  useEffect(() => {
    const spotifyAccessTokenLocalStorage = localStorage.getItem(`spotifyAccessToken`);
    if (!isCopiedFromLocal) {
      try {
        setSpotifyAccessToken(spotifyAccessTokenLocalStorage);
        setIsCopiedFromLocal(true);
      } catch (error) {
        console.log(
          `Oh no! Error when trying to read spotifyAccessToken from local storage and dispatch it.`,
        );
      }
    }
  }, [isCopiedFromLocal, setSpotifyAccessToken]);

  const spotifyAccessToken = useSelectSpotifyAccessToken();
  useEffect(() => {
    if (isCopiedFromLocal) {
      localStorage.setItem(`spotifyAccessToken`, spotifyAccessToken);
    }
  }, [isCopiedFromLocal, spotifyAccessToken]);
};

// TODO: get the theme in typescript
const theme = {
  brand: `#E6DB78`,
  base: `#0D0D0D`,
  // tile: `#1A1A1A`,
  tile: `#262626`,
  text: `#CCCCCC`,
  softText: `#8C8C8C`,
};

// TODO: probs do this differently
const AppWithHooks = () => {
  useSubscribeSpotifyAccessTokenToLocalStorage();
  return <AuthRoutes />;
};

export const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <AppWithHooks />
    </Provider>
  </ThemeProvider>
);
