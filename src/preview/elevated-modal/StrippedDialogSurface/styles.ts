import { makeStyles, tokens } from "@fluentui/react-components";
import { EThemeSpacing } from "@theme/tokens";

const useElevatedModalClasses = makeStyles({
  root: {
    padding: EThemeSpacing.XXL,
    border: `1px solid ${tokens.colorTransparentStroke}`,
    borderRadius: tokens.borderRadiusXLarge,
    boxShadow: tokens.shadow64,
    backgroundColor: tokens.colorNeutralBackground1,
  },
  defaultDimensions: {
    maxWidth: "600px",
    height: "fit-content",
  },
});

export default useElevatedModalClasses;
