import React, { FC } from "react";
import styled from "styled-components";

import { IconSearch, TextInputWithIcon, ButtonIcon } from "@Design";
import { Form, FormTextInput } from "@DesignRedux";

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
  max-width: 512px;
`;

const RootRouteFC: FC<{}> = () => {
  return (
    <div>
      <Form formId={formId}>
        <StyledInput as={TextInputWithIcon} Input={Input as any} Icon={Icon} />
      </Form>
    </div>
  );
};

export const RootRoute = RootRouteFC;
