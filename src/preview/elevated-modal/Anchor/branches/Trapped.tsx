import { useEffect, useRef } from "react";
import { useModalContext } from "@preview/elevated-modal/provider";
import constants from "@preview/elevated-modal/constants";

export default function Trapped() {
  const { Modal, isActivated } = useModalContext();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActivated || !modalRef.current) return;

    const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    modalRef.current.addEventListener("keydown", trapFocus);

    // Focus the first element when the modal is activated
    firstElement.focus();

    return () => {
      modalRef.current?.removeEventListener("keydown", trapFocus);
    };
  }, [isActivated]);

  return (
    isActivated && (
      <div
        id={constants.modalAnchorContainerId}
        tabIndex={-1}
        role="dialog"
        ref={modalRef}
      >
        {Modal}
      </div>
    )
  );
}
