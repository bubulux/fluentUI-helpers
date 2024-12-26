import type { TFlexPosition } from "@lib-fluent/components/layout/Flex/types";

import { usePositionClasses } from "@lib-fluent/components/layout/Flex/styles";

export default function usePosition(position: TFlexPosition) {
  const classes = usePositionClasses();
  return classes[position];
}
