import type { JSX } from "react";

import useButtonGroupClasses from "./styles";

import { Flex } from "@components/layout";

type TProps = {
  children: JSX.Element[];
};

export default function ButtonGroup({ children }: TProps): JSX.Element {
  const classes = useButtonGroupClasses();
  return (
    <Flex className={classes.root} shWidth="fitContent">
      {children}
    </Flex>
  );
}
