import React, { FC, useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { Heading } from "@Common";
import { FormTextInput, FormCheckbox, FormSubmitButton, Form } from "@DesignRedux";
import { useSelectIsAuthenticated } from "@Redux";

import {
  useFormSearchTerm,
  useFormPlayerCount,
  useFormOwnedByFriend,
  useFormIsOnGamePass,
  ID,
  FORM_ID,
  makeSearchUrl,
} from "../shared";

const Div = styled.div`
  align-self: center;
  @media (min-width: 768px) {
    align-self: auto;
  }
  width: 100%;
  max-width: 512px;
`;

const FormContainer = styled(Form)`
  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const useOnSubmit = () => {
  const history = useHistory();
  const [searchTerm] = useFormSearchTerm();
  const [playerCount] = useFormPlayerCount();
  const [ownedByFriend] = useFormOwnedByFriend();
  const [isOnGamePass] = useFormIsOnGamePass();

  const onSubmit = useCallback(() => {
    const url = makeSearchUrl({
      searchTerm: searchTerm as any,
      playerCount: playerCount as any,
      ownedByFriend: ownedByFriend as any,
      isOnGamePass: isOnGamePass as any,
      page: 1,
    });
    history.push(url);
  }, [history, searchTerm, playerCount, ownedByFriend, isOnGamePass]);
  return onSubmit;
};

export const SearchForm: FC<{}> = () => {
  const isAuthenticated = useSelectIsAuthenticated();
  const onSubmit = useOnSubmit();
  return (
    <Div>
      <Heading>Filters</Heading>
      <FormContainer formId={FORM_ID} onSubmit={onSubmit}>
        <FormTextInput
          id={ID.SEARCH_TERM}
          formId={FORM_ID}
          name="Search Term"
          label="Search"
          autoComplete="off"
        />
        <FormTextInput
          id={ID.PLAYER_COUNT}
          formId={FORM_ID}
          name="Player Count"
          type="number"
          label="Player Count"
          autoComplete="off"
          min="1"
        />
        {isAuthenticated ? (
          <FormCheckbox
            id={ID.OWNED_BY_FRIEND}
            formId={FORM_ID}
            name="Owned by Friend"
            label="Owned by a Friend"
          />
        ) : null}
        <FormCheckbox
          id={ID.IS_ON_GAME_PASS}
          formId={FORM_ID}
          name="Is on Game Pass"
          label="Is on Game Pass"
        />
        <FormSubmitButton>Search</FormSubmitButton>
      </FormContainer>
    </Div>
  );
};