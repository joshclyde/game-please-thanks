import React, { FC, useCallback } from "react";
import { State, makeActionSetSmiteSearchTerm, selectSmiteSearchTerm } from "@Redux";
import { connect, ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";

interface Props {}

const mapState = (state: State) => ({
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
      placeholder="Search for a character..."
      onChange={onChange}
    />
  );
};

export const GodsSearchBar = connector(GodsSearchBarFC);
