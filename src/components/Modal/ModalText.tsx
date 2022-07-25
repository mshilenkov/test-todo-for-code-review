import React from "react";

interface ModalTextProps {
  text: string;
}

export const ModalText: React.FC<ModalTextProps> = ({ text }) => {
  return <p className="modal__content-text">{text}</p>;
};
