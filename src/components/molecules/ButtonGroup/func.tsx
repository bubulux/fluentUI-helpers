import type { JSX } from "react";

import { Flex } from "@components/layout";
import useButtonGroupClasses from "@components/molecules/ButtonGroup/styles";

type TProps = {
  children: JSX.Element[];
  ariaLabel?: string;
};

/**
 * @description
 * - a very simple wrapper to get started with a button group
 * - will make sure that the first and last childs borderRadius is preserved
 * - while the ones in between are normalized and the border is removed, to avoid double borders
 * - all subsequent logic needs to be handled by the consumer, there are examples in the storybook
 *
 * @hints
 * - make sure the buttons are of the same size
 * - make sure the buttons on the edges have the same shape
 * - make sure that when disabling a Button, you use the `disableFosusable` prop, in order to ensure consistent tab-index order
 * - use appearance="primary" for the currently active button and the rest to default "outline"
 * - probably use it in a XOR fashion, so that only one button is active at a time
 *
 * @props
 * - `children`: expects the Button component, at least two
 * - `ariaLabel`: optional, used for accessibility
 *
 * @default
 *  arialLabel = "Button group"
 *
 */
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
