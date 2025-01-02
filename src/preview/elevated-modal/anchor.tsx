import { useModalContext } from "@preview/elevated-modal/provider";

import constants from "@preview/elevated-modal/constants";
import "./anchor.css";

export default function ModalAnchor() {
  const { Modal, isActivated } = useModalContext();

  return (
    isActivated && (
      <div id={constants.modalAnchorContainerId} tabIndex={-1}>
        {Modal && Modal}
      </div>
    )
  );
}
