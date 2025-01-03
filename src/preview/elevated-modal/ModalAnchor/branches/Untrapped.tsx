import { useModalContext } from "@preview/elevated-modal/provider";

import constants from "@preview/elevated-modal/constants";

export default function Untrapped() {
  const { Modal, isActivated } = useModalContext();

  return (
    isActivated && (
      <div
        id={constants.modalAnchorContainerId}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
      >
        {Modal}
      </div>
    )
  );
}
