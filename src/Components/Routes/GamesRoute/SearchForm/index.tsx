import React, { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Heading } from "@Common";
import {
  FormTextInput,
  FormCheckbox,
  FormSubmitButton,
  FormSelect,
  Form,
} from "@DesignRedux";
import { useIsAuthenticated } from "@State";

import {
  useFormSearchTerm,
  useFormPlayerCount,
  useFormOwnedByFriend,
  useFormIsOnGamePass,
  useFormSortBy,
  ID,
  FORM_ID,
  makeSearchUrl,
  SORT_BY_OPTIONS,
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
  const navigate = useNavigate();
  const [searchTerm] = useFormSearchTerm();
  const [playerCount] = useFormPlayerCount();
  const [ownedByFriend] = useFormOwnedByFriend();
  const [isOnGamePass] = useFormIsOnGamePass();
  const [sortBy] = useFormSortBy();

  const onSubmit = useCallback(() => {
    const url = makeSearchUrl({
      searchTerm: searchTerm as any,
      playerCount: playerCount as any,
      ownedByFriend: ownedByFriend as any,
      isOnGamePass: isOnGamePass as any,
      page: 1,
      sortBy: sortBy as any,
    });
    navigate(url, { replace: true });
  }, [navigate, searchTerm, playerCount, ownedByFriend, isOnGamePass, sortBy]);
  return onSubmit;
};

export const SearchForm: FC<{}> = () => {
  const isAuthenticated = useIsAuthenticated();
  const onSubmit = useOnSubmit();
  return (
    <Div>
      <Heading>Filters</Heading>
      <FormContainer formId={FORM_ID} onSubmit={onSubmit} initialState={{}}>
        <FormTextInput
          id={ID.SEARCH_TERM}
          formId={FORM_ID}
          name="Name"
          label="Name"
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
          name="Game Pass"
          label="Game Pass"
        />
        <FormSelect id={ID.SORT_BY} formId={FORM_ID} name="Sort By" label="Sort By">
          {SORT_BY_OPTIONS.map(({ value, content }) => {
            return (
              <option key={value} value={value}>
                {content}
              </option>
            );
          })}
        </FormSelect>
        <FormSubmitButton>Search</FormSubmitButton>
      </FormContainer>
    </Div>
  );
};
