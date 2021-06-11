import React, { FC, useCallback, useMemo } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { Page, Link } from "@Common";
import { Form, FormCheckbox, FormTextInput, FormSubmitButton } from "@DesignRedux";
import {
  useSelectHasGamePass,
  useSelectFormInputValue,
  useSelectName,
  useOptimisticUpdateUserProfile,
  useSelectIsPendingOptimisticUpdateUserProfile,
} from "@Redux";

const FORM_ID = `EDIT_PROFILE_FORM_ID`;
const NAME_ID = `NAME_ID`;
const HAS_GAME_PASS_ID = `HAS_GAME_PASS_ID`;

const FormContainer = styled(Form)`
  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 16px;
  }
`;

const useOnSubmit = () => {
  const inputValueHasGamePass = useSelectFormInputValue(
    FORM_ID,
    HAS_GAME_PASS_ID,
  ) as boolean;
  const inputValueName = useSelectFormInputValue(FORM_ID, NAME_ID) as string;
  const optimisticUpdateUserProfile = useOptimisticUpdateUserProfile();
  const isPending = useSelectIsPendingOptimisticUpdateUserProfile();
  const history = useHistory();
  const onSubmit = useCallback(async () => {
    if (!isPending) {
      await optimisticUpdateUserProfile({
        hasGamePass: inputValueHasGamePass,
        name: inputValueName,
      });
      history.push(`/profile`);
    }
  }, [
    inputValueHasGamePass,
    inputValueName,
    optimisticUpdateUserProfile,
    isPending,
    history,
  ]);
  return onSubmit;
};

const EditProfileRouteFC: FC<{}> = () => {
  const hasGamePass = useSelectHasGamePass() as boolean;
  const name = useSelectName() as string;
  const onSubmit = useOnSubmit();
  const isPending = useSelectIsPendingOptimisticUpdateUserProfile();
  const initialState = useMemo(
    () => ({
      [HAS_GAME_PASS_ID]: hasGamePass,
      [NAME_ID]: name,
    }),
    [hasGamePass, name],
  );

  return (
    <Page header="PROFILE">
      <FormContainer onSubmit={onSubmit} formId={FORM_ID} initialState={initialState}>
        <FormTextInput id={NAME_ID} formId={FORM_ID} name={NAME_ID} label="Name" />
        <FormCheckbox
          id={HAS_GAME_PASS_ID}
          formId={FORM_ID}
          name={HAS_GAME_PASS_ID}
          label="Game Pass"
        />
        <ButtonsContainer>
          <FormSubmitButton>{isPending ? `Saving...` : `Save`}</FormSubmitButton>
          <Link to="/profile">Cancel</Link>
        </ButtonsContainer>
      </FormContainer>
    </Page>
  );
};

export const EditProfileRoute = EditProfileRouteFC;
