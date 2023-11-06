import { ModalInput } from "./ModalInput";
import { ModalDropdown } from "./ModalDropdown";
import { SelectedProps } from "../shared/lib/SelectedProps";

interface ModalRowProps extends SelectedProps{
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

export const ModalRow: React.FC<ModalRowProps> = ({
  name,
  setName,
  selected,
  setSelected,
}) => {
  return (
    <div className="modal__content_row">
      <ModalInput name={name} setName={setName} />
      <ModalDropdown selected={selected} setSelected={setSelected} />
    </div>
  );
};
