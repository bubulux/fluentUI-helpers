import { makeStyles } from "@lib-fluent/theme";

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
  // justify-content
  centerContent: {
    justifyContent: "center",
  },
  startContent: {
    justifyContent: "flex-start",
  },
  endContent: {
    justifyContent: "flex-end",
  },
  spaceBetweenContent: {
    justifyContent: "space-between",
  },
  spaceAroundContent: {
    justifyContent: "space-around",
  },
  spaceEvenlyContent: {
    justifyContent: "space-evenly",
  },
  stretchContent: {
    justifyContent: "stretch",
  },
  // align-items
  centerItems: {
    alignItems: "center",
  },
  startItems: {
    alignItems: "flex-start",
  },
  endItems: {
    alignItems: "flex-end",
  },
  stretchItems: {
    alignItems: "stretch",
  },
  spaceBetweenItems: {
    alignItems: "space-between",
  },
  spaceAroundItems: {
    alignItems: "space-around",
  },
  spaceEvenlyItems: {
    alignItems: "space-evenly",
  },

  // wrap
  wrap: {
    flexWrap: "wrap",
  },
  nowrap: {
    flexWrap: "nowrap",
  },
});

export default useFlexBoxClasses;
