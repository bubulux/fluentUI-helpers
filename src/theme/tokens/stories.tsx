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
          <DeleteFilled fontSize={EThemeIconSizes.XXS} />
          XXS - 16px
        </Flex>
        <Flex gap="M" alignItems="center">
          <DeleteFilled fontSize={EThemeIconSizes.XS} />
          XS - 20px
        </Flex>
        <Flex gap="M" alignItems="center">
          <DeleteFilled fontSize={EThemeIconSizes.S} />S - 24px
        </Flex>
        <Flex gap="M" alignItems="center">
          <DeleteFilled fontSize={EThemeIconSizes.M} />M - 28px
        </Flex>
        <Flex gap="M" alignItems="center">
          <DeleteFilled fontSize={EThemeIconSizes.L} />L - 32px
        </Flex>
        <Flex gap="M" alignItems="center">
          <DeleteFilled fontSize={EThemeIconSizes.XL} />
          XL - 48px
        </Flex>
      </Flex>
    ),
    dimension: <></>,
    spacing: (
      <Flex gap="M" direction="column">
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeSpacing.XXS,
              height: "16px",
              backgroundColor: "red",
            }}
          />
          XXS - 2px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeSpacing.XS,
              height: "16px",
              backgroundColor: "red",
            }}
          />
          XS - 4px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeSpacing.SNudge,
              height: "16px",
              backgroundColor: "red",
            }}
          />
          SNudge - 6px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeSpacing.S,
              height: "16px",
              backgroundColor: "red",
            }}
          />
          S - 8px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeSpacing.MNudge,
              height: "16px",
              backgroundColor: "red",
            }}
          />
          MNudge - 10px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeSpacing.M,
              height: "16px",
              backgroundColor: "red",
            }}
          />
          M - 12px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeSpacing.L,
              height: "16px",
              backgroundColor: "red",
            }}
          />
          L - 16px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeSpacing.XL,
              height: "16px",
              backgroundColor: "red",
            }}
          />
          XL - 20px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeSpacing.XXL,
              height: "16px",
              backgroundColor: "red",
            }}
          />
          XXL - 24px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeSpacing.XXXL,
              height: "16px",
              backgroundColor: "red",
            }}
          />
          XXXL - 32px
        </Flex>
      </Flex>
    ),
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

export const Spacing: Story = {
  args: {
    token: "spacing",
  },
};

export const Dimensions: Story = {
  args: {
    token: "dimension",
  },
};
