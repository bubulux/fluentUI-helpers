import { makeStyles } from "@fluentui/react-components";

const useButtonGroupClasses = makeStyles({
  root: {
    "& > *:first-child": {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    "& > *:not(:first-child):not(:last-child)": {
      borderRadius: 0,
      borderLeft: "none",
    },
    "& > *:last-child": {
      borderLeft: "none",
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
  },
});

export default useButtonGroupClasses;
