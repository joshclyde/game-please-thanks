import TileWithMarkdown from "@Design/Tile/TileWithMarkdown";
import { multiclass } from "@utils/multiclass";
import * as React from "react";
import { FunctionComponent, useCallback, useState } from "react";
import injectSheet from "react-jss";

type Props = {
  className?: string;
  frontClassName?: string;
  backClassName?: string;
  front: string;
  back: string;
};

// const input = "# This is a header\n\nAnd this is a paragraph";

const Flashcard: FunctionComponent<Props> = ({
  className,
  frontClassName,
  backClassName,
  front,
  back,
}) => {
  const [isFacingFront, toggleIsFacingFront] = useState(true);
  const onClick = useCallback(
    () => toggleIsFacingFront((previousValue) => !previousValue),
    [],
  );

  return (
    <TileWithMarkdown
      className={multiclass(className, isFacingFront ? frontClassName : backClassName)}
      onClick={onClick}
      input={isFacingFront ? front : back}
    />
  );
};

const styles = {};

export default injectSheet(styles)(Flashcard);