import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../**/stories.@(ts|tsx)", "../**/readme.mdx"],
  addons: ["@storybook/addon-essentials"],
  framework: "@storybook/react-vite",
};

export default config;
