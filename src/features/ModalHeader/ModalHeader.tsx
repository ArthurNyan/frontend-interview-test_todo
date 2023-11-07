import { CloseIcon } from "../../shared/assets/icons";
import { SelectorProps } from "../../shared/lib/SelectorProps";

interface ModalHeaderProps extends SelectorProps {
  title: string;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  clearState,
  title,
  setActive,
}) => {
  return (
    <header className="modal__content-header">
      <h4 className="modal__content-title">{title}</h4>
      <button
        className="modal__content-header__btn"
        onClick={() => {
          clearState && clearState();
          setActive(false);
        }}
      >
        <CloseIcon />
      </button>
    </header>
  );
};
