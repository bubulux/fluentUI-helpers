export type TFlexDirection = "row" | "column";

export type TFlexOptionContent =
  | "start"
  | "center"
  | "end"
  | "spaceBetween"
  | "spaceAround"
  | "spaceEvenly"
  | "stretch";

export type TFlexOptionItems =
  | "start"
  | "center"
  | "end"
  | "stretch"
  | "baseline";

export type TFlexGrow = boolean;

export type TFlexShrink = boolean;

export type TFlexWrap = boolean | "reverse";

export type TFlexBasis =
  | "auto"
  | "fill"
  | "maxContent"
  | "minContent"
  | "fitContent"
  | "content"
  | 0;
export type TFlexShorthandDimensions = "25%" | "50%" | "75%" | "100%" | "auto";

export type TFlexPosition =
  | "-moz-initial"
  | "-webkit-sticky"
  | "absolute"
  | "fixed"
  | "inherit"
  | "initial"
  | "relative"
  | "revert"
  | "revert-layer"
  | "static"
  | "sticky"
  | "unset";
