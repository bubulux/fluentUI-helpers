import React from "react";
import type { ReactNode } from "react";

import { mergeClasses } from "@fluentui/react-components";
import type { TThemeSpacing, TThemeShorthandSpacing } from "@theme";

import {
  useGap,
  useFlexBox,
  useMargin,
  usePadding,
  useShorthandDimension,
  useAriaProps,
  usePosition,
} from "@components/layout/Flex/hooks";

import type {
  TFlexDirection,
  TFlexOptionContent,
  TFlexOptionItems,
  TFlexWrap,
  TFlexGrow,
  TFlexShrink,
  TFlexBasis,
  TFlexShorthandDimensions,
  TFlexPosition,
} from "@components/layout/Flex/types";

type TProps = {
  children: ReactNode;
  role?: string;
  position?: TFlexPosition;
  direction?: TFlexDirection;
  justifyContent?: TFlexOptionContent;
  alignItems?: TFlexOptionItems;
  alignContent?: TFlexOptionContent;
  alignSelf?: TFlexOptionItems;
  grow?: TFlexGrow;
  noShrink?: TFlexShrink;
  basis?: TFlexBasis;
  wrap?: TFlexWrap;
  className?: string;
  gap?: TThemeSpacing;
  margin?: TThemeShorthandSpacing;
  padding?: TThemeShorthandSpacing;
  shWidth?: TFlexShorthandDimensions;
  shHeight?: TFlexShorthandDimensions;
  testId?: string;
};

/**
 * @description
 * - fluent does not provide a `Flex` component for consistent layout (it was removed in the latest version)
 * - having this allows to use fewer makeStyles call and repeting flex configurations in the code
 * - its especially usefull when certain layout styles have to be applied conditionally
 * - for this the entire conditional logic is abstracted inside this component, providing very much styled-component like ergonomics
 * - supports direct data-testid prop as well as all aria props
 *
 * @props
 * - `direction`: flex-direction property
 * - `justifyContent`: justify-content property
 * - `alignItems`: align-items property
 * - `alignContent`: align-content property
 * - `alignSelf`: align-self property
 * - `wrap`: flex-wrap property
 * - `gap`: gap between children, with fixed predefined values from the design system, not discriminating between horizontal and vertical gap (because there are literally the same values)
 * - `grow`: shorthand for flex-grow property
 * - `noShrink`: shorthand for flex-shrink property, noShrik is the same as flex-shrink: 0
 * - `basis`: shorthand for flex-basis property, only global values are supported, for specific values use className prop
 * - `position`: position property, supports all global values
 * - `margin`: margin property, using the same values like gap, expects the shorthand notation
 * - `padding`: same like margin, but for padding, concrete example below
 *
 * ```jsx
 * // the shorthand is not a simple string, but rather defined as an array that can be of size 1 up to 4
 * // each element provides additional restraint from the design system tokens
 * // following examples will only use padding, but the same applies to margin
 * // the * between tokens.spacing and the further specifier can be interpreted as either horizontal or vertical (both the same values, reasoning is explained in gap comment above)
 *
 * <Flex padding={["S"]} /> // like saying padding: tokens.spacing*S;
 * <Flex padding={["S", "M"]} /> // like saying padding: `${tokens.spacing*S} ${tokens.spacing*M}`;
 * <Flex padding={["S", "M", "L"]} /> // like saying padding: `${tokens.spacing*S} ${tokens.spacing*M} ${tokens.spacing*L}`;
 * <Flex padding={["S", "M", "L", "XL"]} /> // like saying padding: `${tokens.spacing*S} ${tokens.spacing*M} ${tokens.spacing*L} ${tokens.spacing*XL}`;
 *
 * ```
 * - `shWidth`: shorthand for width property
 * - `shHeight`: shorthand for height property
 * - `className`: to add additional classes to the component, will override all specified styles from props
 * - `aria-*`: all aria props are supported, they will be spread on the root div
 * - `testId`: passed down the data-testid attribute
 *
 *
 * @default
 * direction = "row",
 * position = "static",
 * justifyContent = "start",
 * alignItems = "stretch",
 * alignContent = "stretch",
 * alignSelf = "auto",
 * grow = false,
 * noShrink = false,
 * wrap = false,
 * gap = "None",
 * margin = ["None"],
 * padding = ["None"],
 * shHeight = "auto",
 * shWidth = "auto"
 */
export default function Flex({
  direction = "row",
  position = "static",
  justifyContent = "start",
  alignContent = "stretch",
  alignItems = "stretch",
  alignSelf = "auto",
  wrap = false,
  gap = "None",
  grow = false,
  noShrink = false,
  basis = "auto",
  margin = ["None"],
  padding = ["None"],
  shHeight = "auto",
  shWidth = "auto",
  className = undefined,
  testId = undefined,
  children,
  role = undefined,
  ...rest
}: TProps) {
  const flexBoxClass = useFlexBox(
    justifyContent,
    alignContent,
    alignItems,
    alignSelf,
    direction,
    wrap,
    grow,
    noShrink,
    basis,
  );
  const gapClass = useGap(gap);
  const marginClass = useMargin(margin);
  const paddingClass = usePadding(padding);
  const dimensionClass = useShorthandDimension(shWidth, shHeight);
  const positionClass = usePosition(position);
  const ariaProps = useAriaProps(rest);
  return (
    <div
      // spreading of implicit aria props is okay here
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...ariaProps}
      data-testid={testId}
      role={role}
      className={mergeClasses(
        positionClass,
        flexBoxClass,
        gapClass,
        marginClass,
        paddingClass,
        dimensionClass,
        className,
      )}
    >
      {children}
    </div>
  );
}
