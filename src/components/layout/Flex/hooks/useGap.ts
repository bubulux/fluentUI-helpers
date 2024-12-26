import { useGapClasses } from "@components/layout/Flex/styles";
import type { TThemeSpacing } from "@theme";

function useGap(gap?: TThemeSpacing) {
  const classes = useGapClasses();
  return gap ? classes[`gap${gap}`] : undefined;
}

export default useGap;
