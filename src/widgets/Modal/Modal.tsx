/* VENDOR */
import React from "react";

/* APPLICATION */
import "./Modal.scss";
import { ModalCreateItemProps } from "../../shared/lib/ModalCreateItemProps";

interface ModalProps extends ModalCreateItemProps{
  item?: {
    id: string;
    name: string;
    description: string;
    category?: string;
  };
  children: React.ReactNode;
  clearState?(): void;
}

export const Modal: React.FC<ModalProps> = ({
  clearState,
  active,
  setActive,
  children,
}) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => {
        clearState && clearState();
        setActive(false);
      }}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
