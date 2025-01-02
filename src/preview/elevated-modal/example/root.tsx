import { ModalContextProvider, ModalAnchor } from "@preview/elevated-modal";
import App from "@preview/elevated-modal/example";

export default function Root() {
  return (
    <ModalContextProvider>
      <App />
      <ModalAnchor />
    </ModalContextProvider>
  );
}
