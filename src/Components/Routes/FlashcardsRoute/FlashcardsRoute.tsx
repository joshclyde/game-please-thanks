import React, { FC } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import { Header } from "@Common";
import { QuizSelector } from "@Domain";

import { FlashcardQuiz } from "./FlashcardQuiz";

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
          <FlashcardQuiz quizId={query.get(`setId`)} />
        </Route>
        <Route exact={true} path="/flashcards">
          <QuizSelector />
        </Route>
      </Switch>
    </div>
  );
};

export const FlashcardsRoute = FlashcardsRouteFC;
