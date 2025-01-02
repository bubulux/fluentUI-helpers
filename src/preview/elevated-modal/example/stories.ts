import type { Meta, StoryObj } from "@storybook/react";
import Root from "@preview/elevated-modal/example/root";

const meta: Meta = {
  title: "Preview/Elevated Modal",
  component: Root,
  args: {},
};

export default meta;

type Story = StoryObj<typeof Root>;

export const Index: Story = {};
