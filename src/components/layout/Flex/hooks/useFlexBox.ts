import { mergeClasses } from "@lib-theme";

import { useFlexBoxClasses } from "@lib-components/layout/Flex/styles";

import type {
  TFlexDirection,
  TFlexOption,
  TFlexWrap,
} from "@lib-components/layout/Flex/types";

export default function useFlexBox(
  justifyContent?: TFlexOption,
  alignItems?: TFlexOption,
  direction?: TFlexDirection,
  wrap?: TFlexWrap,
) {
  const classes = useFlexBoxClasses();
  const directionClass = direction
    ? classes[`${direction}Direction`]
    : undefined;
  const justifyContentClass = justifyContent
    ? classes[`${justifyContent}Content`]
    : undefined;
  const alignItemsClass = alignItems
    ? classes[`${alignItems}Items`]
    : undefined;
  const wrapClass = wrap ? classes[wrap] : undefined;

  return mergeClasses(
    classes.base,
    directionClass,
    justifyContentClass,
    alignItemsClass,
    wrapClass,
  );
}
