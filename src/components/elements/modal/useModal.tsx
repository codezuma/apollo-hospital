import { ModalContext } from "@/pages/_app";
import { useState } from "react";
import ModalForm from "./ModalForm";

// useModal.tsx
export function ModalContextProvider({ children }: any) {
  const [modal, setModal] = useState();

  const openModal = (modalProps: any) => setModal(modalProps);
  const closeModal = () => setModal(undefined);

  return (
      <ModalContext.Provider value={[openModal, closeModal]}>
          {children}
              {modal && <ModalForm></ModalForm>}
      </ModalContext.Provider>
  );
}
