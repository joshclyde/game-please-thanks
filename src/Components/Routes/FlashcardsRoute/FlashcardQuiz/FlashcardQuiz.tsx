import React, { FC, useCallback, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Button } from "@Design";
import {
  makeActionSetCardResponseIsCorrect,
  makeActionSetFlashcardQuizId,
  selectFlashcardQuizCurrentId,
  selectFlashcardQuizFlashcards,
  selectFlashcardQuizLength,
  RootState,
} from "@Redux";

import { Flashcard } from "../Flashcard";

import { calculateGrade } from "./calculateGrade";

const mapState = (state: RootState) => ({
  quizCurrentId: selectFlashcardQuizCurrentId(state),
  quizLength: selectFlashcardQuizLength(state),
  flashcardContents: selectFlashcardQuizFlashcards(state),
});

const mapDispatch = {
  setFlashcardQuizId: makeActionSetFlashcardQuizId,
  setCardResponseIsCorrect: makeActionSetCardResponseIsCorrect,
};

const connector = connect(mapState, mapDispatch);

interface FlashcardQuizProps {
  quizId: string;
}

interface FlashcardForRealProps
  extends FlashcardQuizProps,
    ConnectedProps<typeof connector> {}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border: solid;

  & > * {
    margin: 10px;
  }
`;

const StyledFlashcard = styled(Flashcard)`
  width: 100%;
`;

const StyledData = styled.div`
  width: 200px;
`;

const CorrectButton = styled(Button)`
  width: 100%;
  background-color: #66d14a;
`;

const WrongButton = styled(Button)`
  width: 100%;
  background-color: #d14a66;
`;

const FlashcardQuizFC: FC<FlashcardForRealProps> = ({
  // classes,
  quizId,
  quizCurrentId,
  setFlashcardQuizId,
  setCardResponseIsCorrect,
  quizLength,
  flashcardContents,
}) => {
  const [flashcardIndex, setFlashcardIndex] = useState(0);

  const onClickWrong = useCallback(() => {
    setFlashcardIndex((previousValue) => previousValue + 1);
    // setFlashcardIndex((previousValue) => Math.min(previousValue + 1, quizLength - 1));
    setCardResponseIsCorrect(Object.keys(flashcardContents)[flashcardIndex], false);
  }, [flashcardIndex, flashcardContents, setCardResponseIsCorrect]);
  const onClickCorrect = useCallback(() => {
    setFlashcardIndex((previousValue) => previousValue + 1);
    // setFlashcardIndex((previousValue) => Math.min(previousValue + 1, quizLength - 1));
    setCardResponseIsCorrect(Object.keys(flashcardContents)[flashcardIndex], true);
  }, [flashcardIndex, flashcardContents, setCardResponseIsCorrect]);

  if (quizId !== quizCurrentId) {
    setFlashcardQuizId(quizId);
    return null;
  }

  const numberOfCorrect = Object.values(flashcardContents).filter(
    ({ isCorrect }) => isCorrect,
  ).length;

  if (flashcardIndex >= quizLength) {
    return (
      <div>
        <p>Completed Quiz!</p>
        <p>
          Grade: {calculateGrade(numberOfCorrect / quizLength)} ({numberOfCorrect} /{` `}
          {quizLength})
        </p>
        <Link to={`/flashcards`}>
          <Button>Back to Flashcards Menu</Button>
        </Link>
      </div>
    );
  }

  return (
    <Container>
      <StyledFlashcard
        key={Object.keys(flashcardContents)[flashcardIndex]} // is this weird?
        front={flashcardContents[Object.keys(flashcardContents)[flashcardIndex]].question}
        back={flashcardContents[Object.keys(flashcardContents)[flashcardIndex]].answer}
      />
      <StyledData>
        <p>
          Current: {flashcardIndex + 1} / {quizLength}
        </p>
        <CorrectButton onClick={onClickCorrect}>Correct.</CorrectButton>
        <WrongButton onClick={onClickWrong}>Wrong!</WrongButton>
      </StyledData>
    </Container>
  );
};

export const FlashcardQuiz = connector(FlashcardQuizFC);
