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
    dimension: (
      <Flex gap="M" direction="column">
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.XS1,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          XS1 - 4px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.XS2,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          XS2 - 8px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.XS3,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          XS3 - 12px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.XS4,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          XS4 - 16px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.XS5,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          XS5 - 20px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.XS6,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          XS6 - 24px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.XS7,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          XS7 - 28px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.XS8,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          XS8 - 32px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.XS9,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          XS9 - 36px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.S1,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          S1 - 40px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.S2,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          S2 - 48px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.S3,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          S3 - 56px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.S4,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          S4 - 64px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.S5,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          S5 - 72px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.S6,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          S6 - 80px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.S7,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          S7 - 88px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.S8,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          S8 - 96px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.S9,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          S9 - 104px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.M1,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          M1 - 116px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.M2,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          M2 - 128px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.M3,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          M3 - 140px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.M4,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          M4 - 152px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.M5,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          M5 - 164px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.M6,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          M6 - 176px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.M7,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          M7 - 188px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.M8,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          M8 - 200px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.M9,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          M9 - 212px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.L1,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          L1 - 228px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.L2,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          L2 - 244px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.L3,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          L3 - 260px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.L4,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          L4 - 276px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.L5,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          L5 - 292px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.L6,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          L6 - 308px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.L7,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          L7 - 324px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.L8,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          L8 - 340px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.L9,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          L9 - 356px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.XL1,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          XL1 - 376px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.XL2,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          XL2 - 392px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.XL3,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          XL3 - 408px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.XL4,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          XL4 - 424px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.XL5,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          XL5 - 440px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.XL6,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          XL6 - 456px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.XL7,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          XL7 - 472px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.XL8,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          XL8 - 488px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.XL9,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          XL9 - 504px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.O1,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          O1 - 528px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.O2,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          O2 - 552px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.O3,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          O3 - 576px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.O4,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          O4 - 600px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.O5,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          O5 - 624px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.O6,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          O6 - 648px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.O7,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          O7 - 672px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.O8,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          O8 - 696px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.O9,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          O9 - 720px
        </Flex>
        <Flex gap="M" alignItems="center">
          <div
            style={{
              width: EThemeDimensions.O10,
              height: "16px",
              backgroundColor: "blue",
            }}
          />
          O10 - 744px
        </Flex>
      </Flex>
    ),
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
