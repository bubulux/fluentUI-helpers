import { createContext, useState, useContext, useMemo } from "react";
import type { ReactNode, JSX, Dispatch, SetStateAction } from "react";

type TProps = {
  isActivated: boolean;
  setIsActivated: Dispatch<SetStateAction<boolean>>;
  Modal: JSX.Element | null;
  setModal: Dispatch<SetStateAction<JSX.Element | null>>;
};

const ModalContext = createContext<TProps | undefined>(undefined);

function ModalContextProvider({ children }: { children: ReactNode }) {
  const [Modal, setModal] = useState<JSX.Element | null>(null);
  const [isActivated, setIsActivated] = useState(false);

  const contextValue = useMemo(
    () => ({
      Modal,
      setModal,
      isActivated,
      setIsActivated,
    }),
    [Modal, setModal, isActivated, setIsActivated],
  );

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
}

function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(
      "useModalContext must be used within a ModalContextProvider",
    );
  }
  return context;
}

export { useModalContext, ModalContextProvider };
