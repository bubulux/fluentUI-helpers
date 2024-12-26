import type { Meta, StoryObj } from "@storybook/react";

import { DeleteFilled } from "@fluentui/react-icons";

import { Flex } from "@components";
import {
  EThemeDimensions,
  EThemeIconSizes,
  EThemeSpacing,
} from "@theme/tokens/index";

function Wrapper({ token }: { token: "dimension" | "iconSize" | "spacing" }) {
  const showcases = {
    iconSize: (
      <Flex gap="M" direction="column" justifyContent="center">
        <Flex gap="M" alignItems="center">
          XXS - 16px
          <DeleteFilled fontSize={EThemeIconSizes.XXS} />
        </Flex>
        <Flex gap="M" alignItems="center">
          XS - 20px
          <DeleteFilled fontSize={EThemeIconSizes.XS} />
        </Flex>
        <Flex gap="M" alignItems="center">
          S - 24px
          <DeleteFilled fontSize={EThemeIconSizes.S} />
        </Flex>
        <Flex gap="M" alignItems="center">
          M - 28px
          <DeleteFilled fontSize={EThemeIconSizes.M} />
        </Flex>
        <Flex gap="M" alignItems="center">
          L - 32px
          <DeleteFilled fontSize={EThemeIconSizes.L} />
        </Flex>
        <Flex gap="M" alignItems="center">
          XL - 48px
          <DeleteFilled fontSize={EThemeIconSizes.XL} />
        </Flex>
      </Flex>
    ),
    dimension: <></>,
    spacing: <></>,
  };

  return showcases[token];
}

const meta: Meta = {
  title: "Theme/Tokens",
  component: Wrapper,
  args: {
    token: "iconSize",
  },
  argTypes: {
    token: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Wrapper>;

export const IconSizes: Story = {};

export const Spacing: Story = {};

export const Dimensions: Story = {};
