import type { JSX } from "react";

import { Flex } from "@components/layout";
import useButtonGroupClasses from "@components/molecules/ButtonGroup/styles";

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
