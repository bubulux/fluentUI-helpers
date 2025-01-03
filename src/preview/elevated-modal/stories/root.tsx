import { ModalContextProvider, ModalAnchor } from "@preview/elevated-modal";
import App from "@previewelevated-modal/stories";

export default function Root() {
  return (
    <ModalContextProvider>
      <App />
      <ModalAnchor />
    </ModalContextProvider>
  );
}
