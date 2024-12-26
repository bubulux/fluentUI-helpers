import { mergeClasses } from "@fluentui/react-components";

import { useDimensionClasses } from "@components/layout/Flex/styles";

import type { TFlexShorthandDimensions } from "@components/layout/Flex/types";

export default function useShorthandDimension(
  shorthandWidth: TFlexShorthandDimensions,
  shorthandHeight: TFlexShorthandDimensions,
) {
  const classes = useDimensionClasses();

  const widthClass = classes[`${shorthandWidth}Width`];
  const heightClass = classes[`${shorthandHeight}Height`];

  return mergeClasses(widthClass, heightClass);
}
