import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["**/stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  framework: "@storybook/react-vite",
};

export default config;
