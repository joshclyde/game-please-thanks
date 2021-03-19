import React, { FC, useCallback, useState, useEffect } from "react";
import styled from "styled-components";

import { IconSearch, TextInputWithIcon, ButtonIcon } from "@Design";
import { Form, FormTextInput } from "@DesignRedux";
import {
  useSelectFormInputValue,
  useLoadSpotifySearchResults,
  useSelectIconTabsEntryValue,
} from "@Redux";

import { SearchResults } from "./SearchResults";
import { TypeTabs } from "./TypeTabs";

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

const tabIndexToType = [`album`, `artist`, `track`];

const useOnSubmitForm = () => {
  const searchBoxTerm = useSelectFormInputValue(formId, inputId) as string;
  const load = useLoadSpotifySearchResults();
  const tabIndex = useSelectIconTabsEntryValue(`explore-type-tabs`);
  const type = tabIndexToType[tabIndex] as "album" | "track";
  const [submittedTerm, setSubmittedTerm] = useState(``);
  const onSubmitForm = useCallback(() => {
    setSubmittedTerm(() => searchBoxTerm as string);
  }, [searchBoxTerm]);
  /*
    Whenever there are changes to `type` or `submittedTerm` then this useEffect
    will request search results with the new values.
  */
  useEffect(() => {
    if (submittedTerm.length > 0 && type) {
      load({ term: submittedTerm, type });
    }
  }, [type, submittedTerm, load]);
  return { onSubmitForm, term: submittedTerm, type };
};

const ExploreForm = styled(Form)`
  max-width: 512px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const StyledTypeTabs = styled(TypeTabs)`
  margin-top: 8px;
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
        <StyledTypeTabs />
        <StyledSearchResults term={term} type={type} />
      </ExploreForm>
    </Div>
  );
};

export const RootRoute = RootRouteFC;
