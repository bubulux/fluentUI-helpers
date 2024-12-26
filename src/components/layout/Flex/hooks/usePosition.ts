import type { TFlexPosition } from "@components/layout/Flex/types";

import { usePositionClasses } from "@components/layout/Flex/styles";

export default function usePosition(position: TFlexPosition) {
  const classes = usePositionClasses();
  return classes[position];
}
