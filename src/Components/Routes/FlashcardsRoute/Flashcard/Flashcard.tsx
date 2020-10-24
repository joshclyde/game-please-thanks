import React, { FC, useCallback, useState } from "react";

import { TileWithMarkdown } from "@Design";
import { cx } from "@Utils";

interface Props {
  className: string;
  front: string;
  back: string;
}

const FlashcardFC: FC<Props> = ({ className, front, back }) => {
  const [isFacingFront, toggleIsFacingFront] = useState(true);
  const onClick = useCallback(
    () => toggleIsFacingFront((previousValue) => !previousValue),
    [],
  );

  return (
    <TileWithMarkdown
      className={cx(className)}
      onClick={onClick}
      input={isFacingFront ? front : back}
    />
  );
};

export const Flashcard = FlashcardFC;
