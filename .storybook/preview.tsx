import React from "react";

import { Preview } from "@storybook/react";
import { FluentProvider as ThemeProvider } from "@fluentui/react-components";

const preview: Preview = {
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
