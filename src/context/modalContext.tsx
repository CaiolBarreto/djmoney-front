import { createContext, ReactNode, useContext, useState } from "react";

type HandleModalProps = {
  isNewTransitionModalOpen: boolean,
  setIsNewTransitionModalOpen: (arg: boolean) => void;
}

type ModalProps = {
  children: ReactNode;
}

const ModalContext = createContext<HandleModalProps>({} as HandleModalProps)

export const ModalProvider = ({ children }: ModalProps) => {
  const [isNewTransitionModalOpen, setIsNewTransitionModalOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isNewTransitionModalOpen,
        setIsNewTransitionModalOpen
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useHandleModal = () => {
  const { isNewTransitionModalOpen, setIsNewTransitionModalOpen } = useContext(ModalContext);
  return { isNewTransitionModalOpen, setIsNewTransitionModalOpen };
}