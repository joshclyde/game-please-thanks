import React, { FunctionComponent, useCallback, useState } from "react";
import injectSheet from "react-jss";

import { Button } from "@Design/index";
import { cx } from "@Utils";

import Flashcard from "../Flashcard";

const styles = {
  realContainer: {
    display: "flex",
    flexFlow: "column nowrap",
    height: "100vh",
  },
  container: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "stretch",
    width: "100%",
    // height: "100%",
  },
  sharedButton: {
    height: 150,
    width: "50%",
  },
  incrementButton: {
    backgroundColor: "#CDECDD",
  },
  decrementButton: {
    backgroundColor: "#ECCDDC",
  },
  flashcard: {
    height: "100%",
    flexGrow: 1,
    border: 1,
  },
  frontClassName: {
    // backgroundColor: "#FFFFFF",
  },
  backClassName: {
    backgroundColor: "#E5E5E5",
  },
};

type Props = {
  classes: {
    realContainer: string;
    container: string;
    sharedButton: string;
    incrementButton: string;
    decrementButton: string;
    flashcard: string;
    frontClassName: string;
    backClassName: string;
  };
  flashcardContents: Array<{ front: string; back: string }>;
};

const FlashcardQuiz: FunctionComponent<Props> = ({ classes, flashcardContents }) => {
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const decrementFlashcardIndex = useCallback(
    () => setFlashcardIndex((previousValue) => previousValue - 1),
    [],
  );
  const incrementFlashcardIndex = useCallback(
    () => setFlashcardIndex((previousValue) => previousValue + 1),
    [],
  );

  return (
    <div className={classes.realContainer}>
      <Flashcard
        className={classes.flashcard}
        {...flashcardContents[flashcardIndex]}
        frontClassName={classes.frontClassName}
        backClassName={classes.backClassName}
      />
      <div className={classes.container}>
        <Button
          className={cx(classes.sharedButton, classes.decrementButton)}
          disabled={flashcardIndex === 0}
          onClick={decrementFlashcardIndex}
        >
          -
        </Button>
        <Button
          className={cx(classes.sharedButton, classes.incrementButton)}
          disabled={flashcardIndex === flashcardContents.length - 1}
          onClick={incrementFlashcardIndex}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default injectSheet(styles)(FlashcardQuiz);
