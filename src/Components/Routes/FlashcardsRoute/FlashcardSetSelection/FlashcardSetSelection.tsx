import { selectFlashcardDataSetIds, State } from "@Redux";
import React, { FC, Fragment } from "react";
import { connect, ConnectedProps } from "react-redux";
import { FlashcardSetSelectionEachOne } from "./FlashcardSetSelectionEachOne";

const mapState = (state: State) => ({
  setIds: selectFlashcardDataSetIds(state),
});

const connector = connect(mapState);

type FlashcardSetSelectionProps = ConnectedProps<typeof connector> & {};

const FlashcardSetSelectionFC: FC<FlashcardSetSelectionProps> = ({ setIds }) => (
  <Fragment>
    {setIds.map((setId) => (
      <FlashcardSetSelectionEachOne setId={setId} />
    ))}
  </Fragment>
);

export const FlashcardSetSelection = connector(FlashcardSetSelectionFC);
