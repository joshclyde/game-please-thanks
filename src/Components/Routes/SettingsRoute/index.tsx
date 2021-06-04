import React, { FC } from "react";

import { Page, Text } from "@Common";

const SettingsRouteFC: FC<{}> = () => {
  return (
    <Page header="SETTINGS">
      <Text>There are no settings yet.</Text>
    </Page>
  );
};

export const SettingsRoute = SettingsRouteFC;
