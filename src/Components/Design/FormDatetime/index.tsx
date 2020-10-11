import React, { FC } from "react";

import { SelectDay } from "./SelectDay";
import { SelectHour } from "./SelectHour";
import { SelectMinute } from "./SelectMinute";
import { SelectMonth } from "./SelectMonth";
import { SelectYear } from "./SelectYear";

interface OwnProps {
  id: string;
  name: string;
  formId: string;
}
interface Props extends OwnProps {}

// TODO: https://www.smashingmagazine.com/2017/07/designing-perfect-date-time-picker/#top
const FormDatetimeFC: FC<Props> = ({ id, name, formId }) => {
  return (
    <div>
      <SelectMonth name={`${name}`} id={`${id}`} formId={formId} />
      <SelectDay name={`${name}`} id={`${id}`} formId={formId} />
      <SelectYear name={`${name}`} id={`${id}`} formId={formId} />
      <SelectHour name={`${name}`} id={`${id}`} formId={formId} />
      <SelectMinute name={`${name}`} id={`${id}`} formId={formId} />
    </div>
  );
};

export const FormDatetime = FormDatetimeFC;
