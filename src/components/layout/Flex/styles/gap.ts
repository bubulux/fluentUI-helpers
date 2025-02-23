import { makeStyles } from "@fluentui/react-components";
import { EThemeSpacing } from "@theme";

const useGapClasses = makeStyles({
  gapNone: {
    gap: EThemeSpacing.None,
  },
  gapXXS: {
    gap: EThemeSpacing.XXS,
  },
  gapXS: {
    gap: EThemeSpacing.XS,
  },
  gapSNudge: {
    gap: EThemeSpacing.SNudge,
  },
  gapS: {
    gap: EThemeSpacing.S,
  },
  gapMNudge: {
    gap: EThemeSpacing.MNudge,
  },
  gapM: {
    gap: EThemeSpacing.M,
  },
  gapL: {
    gap: EThemeSpacing.L,
  },
  gapXL: {
    gap: EThemeSpacing.XL,
  },
  gapXXL: {
    gap: EThemeSpacing.XXL,
  },
  gapXXXL: {
    gap: EThemeSpacing.XXXL,
  },
});

export default useGapClasses;
