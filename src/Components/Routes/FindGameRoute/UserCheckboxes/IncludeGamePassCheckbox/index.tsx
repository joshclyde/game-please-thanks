import React, { FC } from "react";

import { FormCheckbox } from "@DesignRedux";

const IncludeGamePassCheckboxFC: FC<{ className?: string }> = ({ className }) => {
  return (
    <FormCheckbox
      className={className}
      formId="FIND_GAME_ROUTE"
      id="INCLUDE_GAME_PASS"
      name="INCLUDE_GAME_PASS"
      label="Include Game Pass Games"
    />
  );
};

export const IncludeGamePassCheckbox = IncludeGamePassCheckboxFC;
