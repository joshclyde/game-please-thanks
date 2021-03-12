import React, { FC, useCallback, useState } from "react";
import styled from "styled-components";

import { SpotifySearchParams } from "@Api";
import { IconSearch, TextInputWithIcon, ButtonIcon } from "@Design";
import { Form, FormTextInput } from "@DesignRedux";
import { useSelectFormInputValue, useLoadSpotifySearchResults } from "@Redux";

import { SearchResults } from "./SearchResults";

// TODO: don't have this function copied everywhere
const makeSpotifySearchResultsKey = ({
  q,
  type,
  market,
  limit,
  offset,
  include_external,
}: Omit<SpotifySearchParams, "accessToken">) => {
  return `${q}${type}${market}${limit}${offset}${include_external}`;
};

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
  const searchTerm = useSelectFormInputValue(formId, inputId);
  const load = useLoadSpotifySearchResults();
  const [submittedTerm, setSubmittedTerm] = useState(``);
  const onSubmitForm = useCallback(() => {
    setSubmittedTerm(() =>
      makeSpotifySearchResultsKey({
        q: searchTerm as string,
        limit: 10,
        market: `from_token`,
        type: `album`,
      }),
    );
    load(searchTerm as string);
  }, [searchTerm, load]);
  return { onSubmitForm, submittedTerm };
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
  const { onSubmitForm, submittedTerm } = useOnSubmitForm();
  return (
    <Div>
      <ExploreForm formId={formId} onSubmit={onSubmitForm}>
        <StyledInput as={TextInputWithIcon} Input={Input as any} Icon={Icon} />
        <StyledSearchResults searchResultsKey={submittedTerm} />
      </ExploreForm>
    </Div>
  );
};

export const RootRoute = RootRouteFC;
