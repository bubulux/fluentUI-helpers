import React from "react";

import { Preview } from "@storybook/react";

import { ThemeProvider } from "../src/theme";

const preview: Preview = {
  // parameters: {},
  globalTypes: {
    theme: {
      toolbar: {
        title: "Theme",
        items: ["light", "dark", "side-by-side"],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "light",
  },
  tags: ["autodocs"],
  decorators: [
    (Story, context) => {
      const isSideBySide = context.globals.theme === "side-by-side";

      return isSideBySide ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            padding: "2rem",
          }}
        >
          <ThemeProvider theme={"light"}>
            <Story />
          </ThemeProvider>
          <ThemeProvider theme={"dark"}>
            <Story />
          </ThemeProvider>
        </div>
      ) : (
        <ThemeProvider theme={context.globals.theme}>
          <div
            style={{
              padding: "2rem",
            }}
          >
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
