import type { JSX } from "react";

import useButtonGroupClasses from "./styles";

import { Flex } from "@components/layout";

type TProps = {
  children: JSX.Element[];
  ariaLabel?: string;
};

export default function ButtonGroup({
  children,
  ariaLabel = "Button group",
}: TProps): JSX.Element {
  const classes = useButtonGroupClasses();
  return (
    <Flex
      className={classes.root}
      shWidth="fitContent"
      role="group"
      aria-label={ariaLabel}
    >
      {children}
    </Flex>
  );
}
