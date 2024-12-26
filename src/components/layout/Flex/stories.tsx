import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Flex } from "@components";
import { makeStyles } from "@fluentui/react-components";

import type { TThemeSpacing } from "@theme";

const meta: Meta<typeof Flex> = {
  component: Flex,
  title: "Components/Layout/Flex",
  args: {
    children: (
      <>
        <div
          style={{
            backgroundColor: "red",
            padding: "4px 8px",
            color: "white",
          }}
        >
          Child-1
        </div>
        <div
          style={{
            backgroundColor: "blue",
            padding: "4px 8px",
            color: "white",
          }}
        >
          Child-2
        </div>
      </>
    ),
  },
  argTypes: {
    className: { control: false },
    children: { control: false },
    gap: {
      control: "select",
      options: [
        "XXS",
        "XS",
        "SNudge",
        "S",
        "MNudge",
        "M",
        "L",
        "XL",
        "XXL",
        "XXXL",
      ] as TThemeSpacing[],
    },
  },
};

export default meta;

type TStory = StoryObj<typeof Flex>;

const useClasses = makeStyles({
  root: {
    border: "4px solid black",
    height: "100px",
  },
});

export const Default: TStory = {
  args: {},
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useClasses();
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Flex {...args} className={classes.root}>
        {args.children}
      </Flex>
    );
  },
};
