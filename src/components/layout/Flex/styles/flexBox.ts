import { makeStyles } from "@fluentui/react-components";

const useFlexBoxClasses = makeStyles({
  base: {
    display: "flex",
  },
  rowDirection: {
    flexDirection: "row",
  },
  columnDirection: {
    flexDirection: "column",
  },
  rowReverseDirection: {
    flexDirection: "row-reverse",
  },
  columnReverseDirection: {
    flexDirection: "column-reverse",
  },

  // justify-content
  centerJustifyContent: {
    justifyContent: "center",
  },
  startJustifyContent: {
    justifyContent: "flex-start",
  },
  endJustifyContent: {
    justifyContent: "flex-end",
  },
  spaceBetweenJustifyContent: {
    justifyContent: "space-between",
  },
  spaceAroundJustifyContent: {
    justifyContent: "space-around",
  },
  spaceEvenlyJustifyContent: {
    justifyContent: "space-evenly",
  },
  stretchJustifyContent: {
    justifyContent: "stretch",
  },

  // align-items
  autoAlignItems: {
    alignItems: "auto",
  },
  centerAlignItems: {
    alignItems: "center",
  },
  startAlignItems: {
    alignItems: "flex-start",
  },
  endAlignItems: {
    alignItems: "flex-end",
  },
  stretchAlignItems: {
    alignItems: "stretch",
  },
  baselineAlignItems: {
    alignItems: "baseline",
  },

  // align-self
  autoAlignSelf: {
    alignSelf: "auto",
  },
  startAlignSelf: {
    alignSelf: "flex-start",
  },
  endAlignSelf: {
    alignSelf: "flex-end",
  },
  centerAlignSelf: {
    alignSelf: "center",
  },
  stretchAlignSelf: {
    alignSelf: "stretch",
  },
  baselineAlignSelf: {
    alignSelf: "baseline",
  },

  // align-content
  centerAlignContent: {
    alignContent: "center",
  },
  startAlignContent: {
    alignContent: "flex-start",
  },
  endAlignContent: {
    alignContent: "flex-end",
  },
  stretchAlignContent: {
    alignContent: "stretch",
  },
  spaceBetweenAlignContent: {
    alignContent: "space-between",
  },
  spaceAroundAlignContent: {
    alignContent: "space-around",
  },
  spaceEvenlyAlignContent: {
    alignContent: "space-evenly",
  },

  // wrap
  wrap: {
    flexWrap: "wrap",
  },
  nowrap: {
    flexWrap: "nowrap",
  },
  wrapReverse: {
    flexWrap: "wrap-reverse",
  },

  // grow
  growOne: {
    flexGrow: 1,
  },
  growZero: {
    flexGrow: 0,
  },

  // shrink
  shrinkOne: {
    flexShrink: 1,
  },
  shrinkZero: {
    flexShrink: 0,
  },

  // basis
  autoBasis: {
    flexBasis: "auto",
  },
  "0Basis": {
    flexBasis: 0,
  },
  fillBasis: {
    flexBasis: "fill",
  },
  maxContentBasis: {
    flexBasis: "max-content",
  },
  minContentBasis: {
    flexBasis: "min-content",
  },
  fitContentBasis: {
    flexBasis: "fit-content",
  },
  contentBasis: {
    flexBasis: "content",
  },
});

export default useFlexBoxClasses;
