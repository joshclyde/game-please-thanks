import { storiesOf } from "@storybook/react";
import React from "react";

import { TextInputWithIcon, IconSearch, ButtonIcon } from "@Design";

import { FormTextInput } from "../";
import { Form } from "../../Form";

const formId = `formStorybook`;

const Input = ({ className }: { className: any }) => (
  <FormTextInput
    className={className}
    formId={formId}
    id="inputStorybook"
    name="input storybook"
  />
);

const Icon = (props: any) => (
  <ButtonIcon type="submit" {...props}>
    <IconSearch color="#8C8C8C" />
  </ButtonIcon>
);

storiesOf(`DesignRedux/FormTextInput`, module).add(`form text input`, () => (
  <>
    <Form formId={formId} onSubmit={() => undefined}>
      {/* <FormTextInput formId={formId} id="inputStorybook" name="input storybook" /> */}
      <TextInputWithIcon Input={Input as any} Icon={Icon} />
    </Form>
  </>
));
