import React, { FC, useCallback } from "react";
import { connect, ConnectedProps } from "react-redux";

import { RootState, makeActionSetSmiteSearchTerm, selectSmiteSearchTerm } from "@Redux";

interface Props {}

const mapState = (state: RootState) => ({
  searchTerm: selectSmiteSearchTerm(state),
});

const mapDispatch = {
  setSmiteSearchTerm: makeActionSetSmiteSearchTerm,
};

const connector = connect(mapState, mapDispatch);

interface PropsForReals extends Props, ConnectedProps<typeof connector> {}

const GodsSearchBarFC: FC<PropsForReals> = ({ searchTerm, setSmiteSearchTerm }) => {
  const onChange = useCallback(
    (event) => {
      setSmiteSearchTerm(event.target.value);
    },
    [setSmiteSearchTerm],
  );

  return (
    <input
      type="text"
      value={searchTerm}
      placeholder="Search for a god..."
      onChange={onChange}
    />
  );
};

export const GodsSearchBar = connector(GodsSearchBarFC);
