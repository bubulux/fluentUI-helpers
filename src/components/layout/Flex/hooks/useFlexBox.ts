import { mergeClasses } from "@fluentui/react-components";

import { useFlexBoxClasses } from "@components/layout/Flex/styles";

import type {
  TFlexDirection,
  TFlexOptionContent,
  TFlexOptionItems,
  TFlexShrink,
  TFlexGrow,
  TFlexBasis,
  TFlexWrap,
} from "@components/layout/Flex/types";

export default function useFlexBox(
  justifyContent?: TFlexOptionContent,
  alignContent?: TFlexOptionContent,
  alignItems?: TFlexOptionItems,
  alignSelf?: TFlexOptionItems,
  direction?: TFlexDirection,
  wrap?: TFlexWrap,
  grow?: TFlexGrow,
  noShrink?: TFlexShrink,
  basis?: TFlexBasis,
) {
  const classes = useFlexBoxClasses();

  const directionClass = direction
    ? classes[`${direction}Direction`]
    : undefined;

  const justifyContentClass = justifyContent
    ? classes[`${justifyContent}JustifyContent`]
    : undefined;

  const alignContentClass = alignContent
    ? classes[`${alignContent}AlignContent`]
    : undefined;

  const alignItemsClass = alignItems
    ? classes[`${alignItems}AlignItems`]
    : undefined;

  const alignSelfClass = alignSelf
    ? classes[`${alignSelf}AlignSelf`]
    : undefined;

  const basisClass = basis ? classes[`${basis}Basis`] : undefined;

  const growClass = grow ? classes.growOne : classes.growZero;
  const shrinkClass = noShrink ? classes.shrinkZero : classes.shrinkOne;
  const wrapClass = wrap
    ? (wrap === "reverse" && classes.wrapReverse) || classes.wrap
    : classes.nowrap;

  return mergeClasses(
    classes.base,
    directionClass,
    justifyContentClass,
    alignContentClass,
    alignItemsClass,
    alignSelfClass,
    growClass,
    shrinkClass,
    basisClass,
    wrapClass,
  );
}
