import "./anchor.css";

import {
  TrappedBranch,
  UntrappedBranch,
} from "@previewelevated-modal/Anchor/branches";

type TProps = {
  disableTrapping?: boolean;
};

export default function ModalAnchor({ disableTrapping = false }: TProps) {
  return disableTrapping ? <UntrappedBranch /> : <TrappedBranch />;
}
