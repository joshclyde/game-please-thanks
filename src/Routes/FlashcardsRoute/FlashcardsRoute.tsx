import { Header } from "@Components/App/Header/Header";
import React, { FC } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { FlashcardQuiz } from "./FlashcardQuiz";
import { FlashcardSetSelection } from "./FlashcardSetSelection";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const FlashcardsRouteFC: FC<{}> = () => {
  const query = useQuery();
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/flashcards/quiz">
          <FlashcardQuiz quizId={query.get("setId")} />
        </Route>
        <Route exact={true} path="/flashcards">
          <FlashcardSetSelection />
        </Route>
      </Switch>
    </div>
  );
};

export const FlashcardsRoute = FlashcardsRouteFC;
