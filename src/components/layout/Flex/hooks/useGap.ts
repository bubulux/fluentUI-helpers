import { useGapClasses } from "@lib-components/layout/Flex/styles";
import type { TThemeSpacing } from "@lib-theme";

function useGap(gap?: TThemeSpacing) {
  const classes = useGapClasses();
  return gap ? classes[`gap${gap}`] : undefined;
}

export default useGap;
