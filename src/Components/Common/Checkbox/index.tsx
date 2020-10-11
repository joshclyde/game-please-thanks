import React, { FC, useCallback, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";

import { State, makeActionSetSharedFilter, selectSharedFilter } from "@Redux";

interface Props {
  entityKey: string;
  attributeKey: string;
}

const mapState = (state: State, { entityKey, attributeKey }: Props) => ({
  checkboxValue: selectSharedFilter(state, entityKey, attributeKey),
});

const mapDispatch = {
  setValue: makeActionSetSharedFilter,
};

const connector = connect(mapState, mapDispatch);

interface PropsForReals
  extends Props,
    ConnectedProps<typeof connector>,
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    > {}

const CheckboxFC: FC<PropsForReals> = ({
  entityKey,
  attributeKey,
  checkboxValue,
  setValue,
  ...restProps
}) => {
  useEffect(() => {
    setValue(entityKey, attributeKey, false);
  }, []);

  const onChange = useCallback(() => {
    setValue(entityKey, attributeKey, !checkboxValue);
  }, [entityKey, attributeKey, checkboxValue]);

  return (
    <input {...restProps} type="checkbox" checked={checkboxValue} onChange={onChange} />
  );
};

export const Checkbox = connector(CheckboxFC);
