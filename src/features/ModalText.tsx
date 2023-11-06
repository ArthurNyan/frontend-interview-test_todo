import { ModalTextProps } from "../shared/lib/ModalTextProps";

export const ModalText: React.FC<ModalTextProps> = ({ text }) => {
  return <p className="modal__content-text">{text}</p>;
};
