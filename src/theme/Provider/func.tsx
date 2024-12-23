import type { ReactNode } from "react";

import { FluentProvider } from "@fluentui/react-components";
import colors from "@theme/Provider/colors";
import { useClasses, useStaticStyles } from "@theme/Provider/styles";

export default function ThemeProvider({
  children,
  theme = "light",
}: {
  children: ReactNode;
  theme?: "light" | "dark";
}) {
  useStaticStyles();

  const classes = useClasses();
  return (
    <FluentProvider className={classes.root} theme={colors[theme]}>
      {children}
    </FluentProvider>
  );
}
