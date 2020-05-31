import { Button } from "@Design";
import {
  makeActionSetFlashcardQuizId,
  selectFlashcardQuizCurrentId,
  selectFlashcardQuizFlashcards,
  selectFlashcardQuizLength,
  State,
} from "@Redux";
import React, { FC, useCallback, useState } from "react";
import injectSheet from "react-jss";
import { connect, ConnectedProps } from "react-redux";
import { Flashcard } from "../Flashcard";

const mapState = (state: State) => ({
  quizCurrentId: selectFlashcardQuizCurrentId(state),
  quizLength: selectFlashcardQuizLength(state),
  flashcardContents: selectFlashcardQuizFlashcards(state),
});

const mapDispatch = {
  setFlashcardQuizId: makeActionSetFlashcardQuizId,
};

const connector = connect(
  mapState,
  mapDispatch,
);

interface FlashcardQuizProps {
  quizId: string;
  classes: {
    main: string;
    flashcard: string;
    flashcardData: string;
    nextPreviousButton: string;
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
  quizLength,
  flashcardContents,
}) => {
  if (quizId !== quizCurrentId) {
    setFlashcardQuizId(quizId);
    return null;
  }

  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const decrementFlashcardIndex = useCallback(
    () => setFlashcardIndex((previousValue) => Math.max(0, previousValue - 1)),
    [],
  );
  const incrementFlashcardIndex = useCallback(
    () =>
      setFlashcardIndex((previousValue) => Math.min(previousValue + 1, quizLength - 1)),
    [flashcardIndex],
  );

  return (
    <div className={classes.main}>
      <Flashcard
        className={classes.flashcard}
        front={flashcardContents[Object.keys(flashcardContents)[flashcardIndex]].question}
        back={flashcardContents[Object.keys(flashcardContents)[flashcardIndex]].answer}
      />
      <div className={classes.flashcardData}>
        <Button
          className={classes.nextPreviousButton}
          onClick={decrementFlashcardIndex}
          disabled={flashcardIndex === 0}
        >
          Previous
        </Button>
        <Button
          className={classes.nextPreviousButton}
          onClick={incrementFlashcardIndex}
          disabled={quizLength - 1 === flashcardIndex}
        >
          Next
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
    nextPreviousButton: {
      width: "100%",
    },
  })(FlashcardQuizFC),
);
// export const FlashcardQuiz = compose(
//   connector,
//   injectSheet({
//     main: {
//       display: "flex",
//       flexDirection: "row",
//       border: "solid",
//       "& > *": { margin: 10 },
//     },
//     flashcard: {
//       width: "100%",
//     },
//     flashcardData: {
//       width: 200,
//     },
//     nextPreviousButton: {
//       width: "100%",
//     },
//   }),
// )(FlashcardQuizFC);

// const flashcardContents = [
//   {
//     front: "**Question:** How many dimensions is the flexbox layout?",
//     back: `**Answer:** 1-dimensional\n
//       \nFlexbox deals with layout in one dimension at a time -- either as a row or a column.`,
//   },
//   {
//     front: "**Question:** What are the 2 axes of flexbox?",
//     back: "**Answer:** The **main** axis and the **cross** axis.",
//   },
//   {
//     front: "**Question:** Which axis defines `flex-direction`?",
//     back: "**Answer**: The **main** axis defines `flex-direction`",
//   },
//   {
//     front: "**Question:** What are the values available for `flex-direction`?",
//     back:
//       "**Answer:** The values available for `flex-direction` are\n" +
//       "- `row`\n- `row-reverse`\n- `column`\n- `column-reverse`",
//   },
//   {
//     front: "**Question:** Which direction does `flex-direction: row || row-reverse` run?",
//     back:
//       "**Answer:** `row` || `row-reverse` will run along the row in the **inline** direction",
//   },
//   {
//     front:
//       "**Question:** Which direction does `flex-direction: column || column-reverse` run?",
//     back:
//       "**Answer:** `column` || `column-reverse` will run along the column in the **block** direction",
//   },
//   {
//     front: "**Question:** What is an area of a document laid out using flexbox called?",
//     back: "**Answer:** A **flex container**",
//   },
//   {
//     front: "**Question:** How do you create a flex container?",
//     back:
//       "**Answer:** Set the value of the area's container to `display: flex || inline-flex`",
//   },
//   {
//     front: "**Question:** What are the direct children of a flex container called?",
//     back: "**Answer:** **flex items**",
//   },
//   {
//     front: "**Question:** What are the default values of a flex container?",
//     back:
//       "**Answer:** The default values of a flex container are\n" +
//       "- Items display in a row (`flex-direction: row`)\n" +
//       "- Items start from the start edge of the main axis\n" +
//       "- Items do not stretch on the main dimension but can shrink\n" +
//       "- Items will stretch to fit the main axis\n" +
//       "- The `flex-basis` property is set to `auto`\n" +
//       "- The `flex-wrap` property is set to `nowrap`\n",
//   },
// ];
