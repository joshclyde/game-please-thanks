import React, { FC, Fragment } from "react";
import { connect, ConnectedProps } from "react-redux";

import { selectFlashcardDataSetIds, RootState } from "@Redux";

import { QuizEachOne } from "./QuizEachOne";

const mapState = (state: RootState) => ({
  setIds: selectFlashcardDataSetIds(state),
});

const connector = connect(mapState);

type QuizSelectorProps = ConnectedProps<typeof connector> & {};

const QuizSelectorFC: FC<QuizSelectorProps> = ({ setIds }) => (
  <Fragment>
    {setIds.map((setId) => (
      <QuizEachOne setId={setId} />
    ))}
  </Fragment>
);

export const QuizSelector = connector(QuizSelectorFC);
