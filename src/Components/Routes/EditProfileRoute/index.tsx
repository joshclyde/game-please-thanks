import React, { FC, useCallback, useMemo } from "react";
import styled from "styled-components";

import { Page, Link } from "@Common";
import { Form, FormCheckbox, FormTextInput, FormSubmitButton } from "@DesignRedux";
import { useSelectFormInputValue } from "@Redux";
import { useConfidentCurrentUser, useUpdateCurrentUser } from "@State";

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
  const updateUser = useUpdateCurrentUser();
  const onSubmit = useCallback(async () => {
    await updateUser({
      hasGamePass: inputValueHasGamePass,
      name: inputValueName,
    });
  }, [inputValueHasGamePass, inputValueName, updateUser]);
  return onSubmit;
};

const EditProfileRouteFC: FC<{}> = () => {
  const { name, hasGamePass } = useConfidentCurrentUser();
  const onSubmit = useOnSubmit();
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
          <FormSubmitButton>Save</FormSubmitButton>
          <Link to="/profile">Cancel</Link>
        </ButtonsContainer>
      </FormContainer>
    </Page>
  );
};

export const EditProfileRoute = EditProfileRouteFC;
