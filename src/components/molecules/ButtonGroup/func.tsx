import type { JSX } from "react";

import type { ButtonProps } from "@fluentui/react-components";
import type { FluentIcon } from "@fluentui/react-icons";

import { Flex } from "@components/layout";

import useButtonGroupClasses from "@components/molecules/ButtonGroup/styles";

type TPropsBase = {
  ariaLabel?: string;
};

type TPropsGlobalButtonConfig = {
  size?: ButtonProps["size"];
  shape?: ButtonProps["shape"];
};

type TLocalButtonConfig = {
  text: string;
  value?: string;
  icon?: FluentIcon | JSX.Element;
  iconPosition?: ButtonProps["iconPosition"];
  onClick: (value: string) => void;
};

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
