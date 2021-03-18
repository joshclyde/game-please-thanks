import React, { FC, useCallback, useState } from "react";
import styled from "styled-components";

import { SpotifySearchParams } from "@Api";
import { IconSearch, TextInputWithIcon, ButtonIcon } from "@Design";
import { Form, FormTextInput } from "@DesignRedux";
import { useSelectFormInputValue, useLoadSpotifySearchResults } from "@Redux";

import { SearchResults } from "./SearchResults";

const formId = `explore-form`;
const inputId = `explore-form-search`;

const Input = (props: any) => (
  <FormTextInput formId={formId} id={inputId} name={inputId} {...props} />
);

const Icon = (props: any) => (
  <ButtonIcon type="submit" {...props}>
    <IconSearch color="#8C8C8C" />
  </ButtonIcon>
);

const StyledInput = styled.div`
  width: 512px;
`;

const useOnSubmitForm = () => {
  const searchBoxTerm = useSelectFormInputValue(formId, inputId) as string;
  const load = useLoadSpotifySearchResults();
  const [submittedTerm, setSubmittedTerm] = useState(``);
  const onSubmitForm = useCallback(() => {
    setSubmittedTerm(() => searchBoxTerm as string);
    load({ term: searchBoxTerm, type: `album` });
  }, [searchBoxTerm, load]);
  return { onSubmitForm, term: submittedTerm, type: `album` as const };
};

const ExploreForm = styled(Form)`
  max-width: 512px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const StyledSearchResults = styled(SearchResults)`
  margin-top: 8px;
`;

const RootRouteFC: FC<{}> = () => {
  const { onSubmitForm, term, type } = useOnSubmitForm();
  return (
    <Div>
      <ExploreForm formId={formId} onSubmit={onSubmitForm}>
        <StyledInput as={TextInputWithIcon} Input={Input as any} Icon={Icon} />
        <StyledSearchResults term={term} type={type} />
      </ExploreForm>
    </Div>
  );
};

export const RootRoute = RootRouteFC;
