import type { Meta, StoryObj } from "@storybook/react";

import ButtonGroup from "@components/molecules/ButtonGroup";

const meta: Meta = {
  title: "Components/Molecules/ButtonGroup",
  component: ButtonGroup,
  args: {},
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Index: Story = {};
