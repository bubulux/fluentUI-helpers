import React from "react";

import { Preview } from "@storybook/react";

import { ThemeProvider } from "../src/theme";

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
