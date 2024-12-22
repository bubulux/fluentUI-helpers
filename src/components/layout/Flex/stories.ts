import type { Meta, StoryObj } from "@storybook/react";

import Flex from "@components/layout/Flex/func";

const meta: Meta = {
  title: "Components/Layout/Flex",
  component: Flex,
  args: {},
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Index: Story = {};
