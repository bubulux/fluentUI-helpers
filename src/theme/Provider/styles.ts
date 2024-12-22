import { makeStaticStyles, makeStyles } from "@fluentui/react-components";

const useStaticStyles = makeStaticStyles({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  "*::before": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  "*::after": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  body: {
    height: "100vh",
    width: "100vw",
  },
  "#root": {
    height: "100%",
    width: "100%",
  },
});

const useClasses = makeStyles({
  root: {
    width: "100%",
    height: "100%",
  },
});

export { useStaticStyles, useClasses };
