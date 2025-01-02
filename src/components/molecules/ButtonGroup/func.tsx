import type { JSX } from "react";

import useButtonGroupClasses from "./styles";

import { Flex } from "@components/layout";

import { Button } from "@fluentui/react-components";

type TProps = {};

export default function ButtonGroup({}: TProps): JSX.Element {
  const classes = useButtonGroupClasses();
  return (
    <Flex className={classes.root}>
      <Button>Lorem</Button>
      <Button>Doloruem</Button>
      <Button appearance="primary">Quam</Button>
    </Flex>
  );
}
