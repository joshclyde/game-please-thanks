import { Button } from "@Design";
import { navigateToFlashcardQuiz, selectFlashcardSetTitle, State } from "@Redux";
import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";

const mapState = (state: State, { setId }: OwnProps) => ({
  title: selectFlashcardSetTitle(state, setId),
});

const mapDispatch = { navigateToFlashcardQuizThing: navigateToFlashcardQuiz };

const connector = connect(mapState, mapDispatch);

type OwnProps = { setId: string };
type QuizEachOneProps = ConnectedProps<typeof connector> & OwnProps;

const QuizEachOneFC: FC<QuizEachOneProps> = ({ setId, title }) => (
  <Link to={`/flashcards/quiz?setId=${setId}`}>
    <Button>{title}</Button>
  </Link>
);

export const QuizEachOne = connector(QuizEachOneFC);
