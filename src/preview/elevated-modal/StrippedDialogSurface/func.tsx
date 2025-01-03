import type { JSX } from "react";

import { mergeClasses } from "@fluentui/react-components";
import { Fade } from "@fluentui/react-motion-components-preview";

import { Flex } from "@components/layout";

import useStrippedDialogSurfaceClasses from "./styles";

type TProps = {
  enhancementOptions?: {
    rootSurfaceStyles?: boolean;
    defaultDimensions?: boolean;
    parentCenteringContainer?: boolean;
    fadeInFadeOutEffect?: boolean;
  };
  children: JSX.Element;
  className?: string;
};

export default function StrippedDialogSurface({
  enhancementOptions = {
    rootSurfaceStyles: true,
    defaultDimensions: true,
    parentCenteringContainer: true,
    fadeInFadeOutEffect: true,
  },
  children,
  className = undefined,
}: TProps): JSX.Element {
  const classes = useStrippedDialogSurfaceClasses();
  const bareSurface = (
    <div
      aria-modal="true"
      role="dialog"
      aria-labelledby="fui-DialogTitle"
      className={mergeClasses(
        classes.root,
        enhancementOptions.defaultDimensions
          ? classes.defaultDimensions
          : undefined,
        className,
      )}
    >
      {children}
    </div>
  );
  return enhancementOptions.parentCenteringContainer ? (
    <Flex
      justifyContent="center"
      alignItems="center"
      shHeight="100%"
      shWidth="100%"
    >
      {bareSurface}
    </Flex>
  ) : (
    bareSurface
  );
}
