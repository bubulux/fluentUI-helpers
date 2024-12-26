import { useGapClasses } from "@lib-fluent/components/layout/Flex/styles";
import type { TThemeSpacing } from "@lib-fluent/theme";

function useGap(gap?: TThemeSpacing) {
  const classes = useGapClasses();
  return gap ? classes[`gap${gap}`] : undefined;
}

export default useGap;
