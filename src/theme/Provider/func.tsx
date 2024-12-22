import type { ReactNode } from "react";

import { FluentProvider } from "@fluentui/react-components";
import colors from "@theme/Provider/colors";
import { useClasses, useStaticStyles } from "@theme/Provider/styles";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  useStaticStyles();

  const classes = useClasses();
  return (
    <FluentProvider className={classes.root} theme={colors.dark}>
      {children}
    </FluentProvider>
  );
}
