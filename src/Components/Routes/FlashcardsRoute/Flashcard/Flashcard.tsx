import React, { FC, useCallback, useState } from "react";
import injectSheet from "react-jss";

import { TileWithMarkdown } from "@Design";
import { cx } from "@Utils";

type FlashcardProps = {
  classes: {
    main: string;
    flashcard: string;
    flashcardData: string;
    nextPreviousButton: string;
  };
  className: string;
  front: string;
  back: string;
};

const FlashcardFC: FC<FlashcardProps> = ({ classes, className, front, back }) => {
  const [isFacingFront, toggleIsFacingFront] = useState(true);
  const onClick = useCallback(
    () => toggleIsFacingFront((previousValue) => !previousValue),
    [],
  );

  return (
    <TileWithMarkdown
      className={cx(classes.main, className)}
      onClick={onClick}
      input={isFacingFront ? front : back}
    />
  );
};

export const Flashcard = injectSheet({
  main: {
    // display: "flex",
    // flexDirection: "row",
    // border: "solid",
    // "& > *": { margin: 10 },
  },
})(FlashcardFC);
