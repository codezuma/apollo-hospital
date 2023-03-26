import { ModalContext } from "@/pages/_app";
import { useState } from "react";
import ModalForm from "./ModalForm";

// useModal.tsx
export function ModalContextProvider({ children }: any) {
  const [modal, setModal] = useState<boolean>(false);

  const openModal = (a:boolean) => setModal(a);
  const closeModal = () => setModal(false);

  return (
      <ModalContext.Provider value={[openModal, closeModal]}>
          {children}
              {modal && <ModalForm></ModalForm>}
      </ModalContext.Provider>
  );
}
