import React, { FC, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { IconSearch, TextInputWithIcon, ButtonIcon } from "@Design";
import { Form, FormTextInput } from "@DesignRedux";
import {
  selectSpotifyAccessToken,
  useSelectFormInputValue,
  makeThunkFetchSpotifySearchResults,
  makeSpotifySearchResultsKey,
} from "@Redux";

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
  const dispatch = useDispatch();
  const accessToken = useSelector(selectSpotifyAccessToken);
  const searchTerm = useSelectFormInputValue(formId, inputId);
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
    dispatch(
      makeThunkFetchSpotifySearchResults({
        accessToken,
        q: searchTerm as string,
        limit: 10,
        market: `from_token`,
        type: `album`,
      }),
    );
  }, [accessToken, dispatch, searchTerm]);
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
