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
  TFlexOption,
  TFlexWrap,
  TFlexShorthandDimensions,
  TFlexPosition,
} from "@components/layout/Flex/types";

type TProps = {
  children: ReactNode;
  position?: TFlexPosition;
  direction?: TFlexDirection;
  justifyContent?: TFlexOption;
  alignItems?: TFlexOption;
  wrap?: TFlexWrap;
  className?: string;
  gap?: TThemeSpacing;
  margin?: TThemeShorthandSpacing;
  padding?: TThemeShorthandSpacing;
  shWidth?: TFlexShorthandDimensions;
  shHeight?: TFlexShorthandDimensions;
  testId?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

/**
 * @description
 * - fluent does not provide a `Flex` component for consistent layout (it was removed in the latest version)
 * - to have a straight forward implementation of `Flex` component, we have created this layout component
 * - having this allows to use fewer makeStyles call and repeting flex configurations in the code
 * - its especially usefull when certain layout styles have to be applied conditionally
 * - for this the entire conditional logic is abstracted inside this component, providing very much styled-component like ergonomics
 *
 *
 * @props
 * - `direction`: flex-direction property
 * - `justifyContent`: justify-content property
 * - `alignItems`: align-items property
 * - `wrap`: flex-wrap property
 * - `className`: to add additional classes to the component, will override all specified styles from props
 * - `gap`: gap between children, with fixed predefined values from the design system, not discriminating between horizontal and vertical gap (because there are literally the same values)
 * - `margin`: margin property, using the same values like gap, expects the shorthand notation
 * - `padding`: same like margin, but for padding
 *
 * ```
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
 * - `testId`: passed down the data-testid attribute
 * - `shWidth`: shorthand for width property
 * - `shHeight`: shorthand for height property
 *
 * @default
 * direction = "row", justifyContent = "start", alignItems = "start", wrap = "nowrap", gap = "None", margin = ["None"], padding = ["None"], className = "NoClass"
 */
export default function Flex({
  direction = "row",
  position = "static",
  justifyContent = "start",
  alignItems = "start",
  wrap = "nowrap",
  gap = "None",
  margin = ["None"],
  padding = ["None"],
  shHeight = "auto",
  shWidth = "auto",
  className = undefined,
  testId = undefined,
  children,
  ...rest
}: TProps) {
  const flexBoxClass = useFlexBox(justifyContent, alignItems, direction, wrap);
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
      className={mergeClasses(
        positionClass,
        flexBoxClass,
        gapClass,
        marginClass,
        paddingClass,
        dimensionClass,
        className
      )}
    >
      {children}
    </div>
  );
}
