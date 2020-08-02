import { Button } from "@Design";
import {
  makeActionSetCardResponseIsCorrect,
  makeActionSetFlashcardQuizId,
  selectFlashcardQuizCurrentId,
  selectFlashcardQuizFlashcards,
  selectFlashcardQuizLength,
  State,
} from "@Redux";
import React, { FC, useCallback, useState } from "react";
import injectSheet from "react-jss";
import { connect, ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";
import { Flashcard } from "../Flashcard";
import { calculateGrade } from "./calculateGrade";

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
  classes: {
    main: string;
    flashcard: string;
    flashcardData: string;
    correctButton: string;
    wrongButton: string;
  };
}

interface FlashcardForRealProps
  extends FlashcardQuizProps,
    ConnectedProps<typeof connector> {}

const FlashcardQuizFC: FC<FlashcardForRealProps> = ({
  classes,
  quizId,
  quizCurrentId,
  setFlashcardQuizId,
  setCardResponseIsCorrect,
  quizLength,
  flashcardContents,
}) => {
  if (quizId !== quizCurrentId) {
    setFlashcardQuizId(quizId);
    return null;
  }

  const [flashcardIndex, setFlashcardIndex] = useState(0);

  const onClickWrong = useCallback(() => {
    setFlashcardIndex((previousValue) => previousValue + 1);
    // setFlashcardIndex((previousValue) => Math.min(previousValue + 1, quizLength - 1));
    setCardResponseIsCorrect(Object.keys(flashcardContents)[flashcardIndex], false);
  }, [flashcardIndex]);
  const onClickCorrect = useCallback(() => {
    setFlashcardIndex((previousValue) => previousValue + 1);
    // setFlashcardIndex((previousValue) => Math.min(previousValue + 1, quizLength - 1));
    setCardResponseIsCorrect(Object.keys(flashcardContents)[flashcardIndex], true);
  }, [flashcardIndex]);

  const numberOfCorrect = Object.values(flashcardContents).filter(
    ({ isCorrect }) => isCorrect,
  ).length;

  if (flashcardIndex >= quizLength) {
    return (
      <div>
        <p>Completed Quiz!</p>
        <p>
          Grade: {calculateGrade(numberOfCorrect / quizLength)} ({numberOfCorrect} /{" "}
          {quizLength})
        </p>
        <Link to={`/flashcards`}>
          <Button>Back to Flashcards Menu</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className={classes.main}>
      <Flashcard
        key={Object.keys(flashcardContents)[flashcardIndex]} // is this weird?
        className={classes.flashcard}
        front={flashcardContents[Object.keys(flashcardContents)[flashcardIndex]].question}
        back={flashcardContents[Object.keys(flashcardContents)[flashcardIndex]].answer}
      />
      <div className={classes.flashcardData}>
        <p>
          Current: {flashcardIndex + 1} / {quizLength}
        </p>
        <Button className={classes.correctButton} onClick={onClickCorrect}>
          Correct.
        </Button>
        <Button className={classes.wrongButton} onClick={onClickWrong}>
          Wrong!
        </Button>
      </div>
    </div>
  );
};

export const FlashcardQuiz = connector(
  injectSheet({
    main: {
      display: "flex",
      flexDirection: "row",
      border: "solid",
      "& > *": { margin: 10 },
    },
    flashcard: {
      width: "100%",
    },
    flashcardData: {
      width: 200,
    },
    correctButton: {
      width: "100%",
      backgroundColor: "#66D14A",
    },
    wrongButton: {
      width: "100%",
      backgroundColor: "#D14A66",
    },
  })(FlashcardQuizFC),
);
