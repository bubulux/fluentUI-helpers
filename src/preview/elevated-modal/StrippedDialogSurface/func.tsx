import type { JSX } from "react";

import { mergeClasses } from "@fluentui/react-components";

import { Flex } from "@components/layout";

import useStrippedDialogSurfaceClasses from "@previewelevated-modal/StrippedDialogSurface/styles";

type TProps = {
  enhancementOptions?: {
    rootSurfaceStyles?: boolean;
    defaultDimensions?: boolean;
    parentCentering?: boolean;
    parentDimming?: boolean;
  };
  children: JSX.Element;
  className?: string;
};

export default function StrippedDialogSurface({
  enhancementOptions = {
    rootSurfaceStyles: true,
    defaultDimensions: true,
    parentCentering: true,
    parentDimming: true,
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
  return enhancementOptions.parentCentering ? (
    <Flex
      className={
        enhancementOptions.parentDimming ? classes.centerRoot : undefined
      }
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
