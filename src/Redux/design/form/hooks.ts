import { useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeActionSetFormInputValue, makeActionCreateForm } from "./actions";
import { makeSelectFormInputValue, makeSelectDoesFormExist } from "./selectors";

export const useSelectDoesFormExist = (formId: string) => {
  const selector = useMemo(() => makeSelectDoesFormExist(formId), [formId]);
  return useSelector(selector);
};

export const useCreateForm = (formId: string) => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(makeActionCreateForm(formId));
  }, [dispatch, formId]);
};

export const useSelectFormInputValue = (formId: string, inputId: string) => {
  const selector = useMemo(() => makeSelectFormInputValue(formId, inputId), [
    formId,
    inputId,
  ]);

  return useSelector(selector);
};

export const useSetFormInputValue = (formId: string, inputId: string) => {
  const dispatch = useDispatch();
  return useCallback(
    // TODO: don't have this be an any
    (value: any) => {
      dispatch(makeActionSetFormInputValue(formId, inputId, value));
    },
    [dispatch, formId, inputId],
  );
};
