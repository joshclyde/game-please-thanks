import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";

import { Button } from "@Design";
import { selectFlashcardSetTitle, State } from "@Redux";

const mapState = (state: State, { setId }: OwnProps) => ({
  title: selectFlashcardSetTitle(state, setId),
});

const connector = connect(mapState);

type OwnProps = { setId: string };
type QuizEachOneProps = ConnectedProps<typeof connector> & OwnProps;

const QuizEachOneFC: FC<QuizEachOneProps> = ({ setId, title }) => (
  <Link to={`/flashcards/quiz?setId=${setId}`}>
    <Button>{title}</Button>
  </Link>
);

export const QuizEachOne = connector(QuizEachOneFC);
