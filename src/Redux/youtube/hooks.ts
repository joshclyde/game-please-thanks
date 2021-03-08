import { useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectSharedIsLoading, makeSelectSharedIsLoading } from "../shared";

// export const useSelectDoesFormExist = (formId: string) => {
//   const selector = useMemo(() => makeSelectDoesFormExist(formId), [formId]);
//   return useSelector(selector);
// };

// export const useCreateForm = (formId: string) => {
//   const dispatch = useDispatch();
//   return useCallback(() => {
//     dispatch(makeActionCreateForm(formId));
//   }, [dispatch, formId]);
// };

// export const useSelectFormInputValue = (formId: string, inputId: string) => {
//   const selector = useMemo(() => makeSelectFormInputValue(formId, inputId), [
//     formId,
//     inputId,
//   ]);

//   return useSelector(selector);
// };

// export const useSetFormInputValue = (formId: string, inputId: string) => {
//   const dispatch = useDispatch();
//   return useCallback(
//     // TODO: don't have this be an any
//     (value: any) => {
//       dispatch(makeActionSetFormInputValue(formId, inputId, value));
//     },
//     [dispatch, formId, inputId],
//   );
// };

export const useSelectYoutubePlayerIsLoading = () => {
  const selector = useMemo(
    () => makeSelectSharedIsLoading(`INITIALIZE_YOUTUBE_PLAYER`),
    [],
  );
  return useSelector(selector);
};

// export const selectSharedIsLoading = (state: { shared: SharedState }, key: string) =>
//   state.shared.loading?.[key]?.isLoading;

// export const selectSharedIsLoadSuccessful = (
//   state: { shared: SharedState },
//   key: string,
// ) => state.shared.loading?.[key]?.isLoadSuccessful;

// export const selectSharedIsLoadFailure = (state: { shared: SharedState }, key: string) =>
//   state.shared.loading?.[key]?.isLoadFailure;
