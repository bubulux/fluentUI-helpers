import { useMarginClasses } from "@components/layout/Flex/styles";
import { mergeClasses } from "@fluentui/react-components";

import type { TThemeShorthandSpacing } from "@theme";

function useMargin(margin?: TThemeShorthandSpacing) {
  const classes = useMarginClasses();

  if (margin === undefined) {
    return "noMarginValue";
  }
  if (margin.length === 1) {
    return classes[`margin${margin[0]}`];
  }
  if (margin.length === 2) {
    return mergeClasses(
      classes[`marginTop${margin[0]}`],
      classes[`marginRight${margin[1]}`],
      classes[`marginBottom${margin[0]}`],
      classes[`marginLeft${margin[1]}`],
    );
  }
  if (margin.length === 3) {
    return mergeClasses(
      classes[`marginTop${margin[0]}`],
      classes[`marginRight${margin[1]}`],
      classes[`marginBottom${margin[2]}`],
      classes[`marginLeft${margin[1]}`],
    );
  }
  return mergeClasses(
    classes[`marginTop${margin[0]}`],
    classes[`marginRight${margin[1]}`],
    classes[`marginBottom${margin[2]}`],
    classes[`marginLeft${margin[3]}`],
  );
}

export default useMargin;
