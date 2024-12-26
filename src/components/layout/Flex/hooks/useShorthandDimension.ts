import { mergeClasses } from "@lib-fluent/theme";

import { useDimensionClasses } from "@lib-fluent/components/layout/Flex/styles";

import type { TFlexShorthandDimensions } from "@lib-fluent/components/layout/Flex/types";

export default function useShorthandDimension(
  shorthandWidth: TFlexShorthandDimensions,
  shorthandHeight: TFlexShorthandDimensions,
) {
  const classes = useDimensionClasses();

  const widthClass = classes[`${shorthandWidth}Width`];
  const heightClass = classes[`${shorthandHeight}Height`];

  return mergeClasses(widthClass, heightClass);
}
