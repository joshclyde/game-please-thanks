import React, { FC, useCallback, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";

import { Button } from "@Design";
import {
  makeActionSetCardResponseIsCorrect,
  makeActionSetFlashcardQuizId,
  selectFlashcardQuizCurrentId,
  selectFlashcardQuizFlashcards,
  selectFlashcardQuizLength,
  State,
} from "@Redux";

import { Flashcard } from "../Flashcard";

import { calculateGrade } from "./calculateGrade";

import "./FlashcardQuiz.css";

const mapState = (state: State) => ({
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
    <div className={`FlashcardQuizMain`}>
      <Flashcard
        key={Object.keys(flashcardContents)[flashcardIndex]} // is this weird?
        className={`FlashcardQuizFlashcard`}
        front={flashcardContents[Object.keys(flashcardContents)[flashcardIndex]].question}
        back={flashcardContents[Object.keys(flashcardContents)[flashcardIndex]].answer}
      />
      <div className={`FlashcardQuizFlashcardData`}>
        <p>
          Current: {flashcardIndex + 1} / {quizLength}
        </p>
        <Button className={`FlashcardQuizCorrectButton`} onClick={onClickCorrect}>
          Correct.
        </Button>
        <Button className={`FlashcardQuizWrongButton`} onClick={onClickWrong}>
          Wrong!
        </Button>
      </div>
    </div>
  );
};

export const FlashcardQuiz = connector(FlashcardQuizFC);
