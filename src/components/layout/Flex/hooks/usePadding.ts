import { usePaddingClasses } from "@lib-components/layout/Flex/styles";
import { mergeClasses } from "@lib-theme";

import type { TThemeShorthandSpacing } from "@lib-theme";

function usePadding(padding?: TThemeShorthandSpacing) {
  const classes = usePaddingClasses();

  if (padding === undefined) {
    return "noPaddingValue";
  }
  if (padding.length === 1) {
    return classes[`padding${padding[0]}`];
  }
  if (padding.length === 2) {
    return mergeClasses(
      classes[`paddingTop${padding[0]}`],
      classes[`paddingRight${padding[1]}`],
      classes[`paddingBottom${padding[0]}`],
      classes[`paddingLeft${padding[1]}`],
    );
  }
  if (padding.length === 3) {
    return mergeClasses(
      classes[`paddingTop${padding[0]}`],
      classes[`paddingRight${padding[1]}`],
      classes[`paddingBottom${padding[2]}`],
      classes[`paddingLeft${padding[1]}`],
    );
  }
  return mergeClasses(
    classes[`paddingTop${padding[0]}`],
    classes[`paddingRight${padding[1]}`],
    classes[`paddingBottom${padding[2]}`],
    classes[`paddingLeft${padding[3]}`],
  );
}

export default usePadding;
