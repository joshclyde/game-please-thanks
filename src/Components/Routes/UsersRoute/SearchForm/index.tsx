import React, { FC, useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { Form, FormSubmitButton, FormTextInput } from "@DesignRedux";

import { FORM_ID, ID, makeSearchUrl, useFormSearchTerm } from "../shared";

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

  const onSubmit = useCallback(() => {
    const url = makeSearchUrl({
      searchTerm: searchTerm as any,
      page: 1,
    });
    history.push(url);
  }, [history, searchTerm]);
  return onSubmit;
};

export const SearchForm: FC<{}> = () => {
  const onSubmit = useOnSubmit();
  return (
    <Div>
      <FormContainer formId={FORM_ID} onSubmit={onSubmit} initialState={{}}>
        <FormTextInput
          id={ID.SEARCH_TERM}
          formId={FORM_ID}
          name="Search Term"
          label="Search"
          autoComplete="off"
        />
        <FormSubmitButton>Search</FormSubmitButton>
      </FormContainer>
    </Div>
  );
};
