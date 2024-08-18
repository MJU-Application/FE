import { ModalProviderProps } from "../types/setting";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

// 모달 상태와 함수를 제공하는 Context 생성
const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// 모달 컨텍스트를 사용하기 위한 훅
export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === null) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
