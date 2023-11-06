import important from "../shared/assets/icons/important.svg";

interface ModalInputProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  size?: string;
  label?: string;
}

export const ModalInput: React.FC<ModalInputProps> = ({
  name,
  setName,
  size,
  label,
}) => {
  return (
    <div
      className={
        size === "large" ? "modalinput-wrapper large" : "modalinput-wrapper"
      }
    >
      <input
        id="modalinput"
        className="modalinput"
        placeholder="Введите имя задачи/категории"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {label && <>
        <img src={important} alt="important" className="modalinput-icon" />
        <label htmlFor="modalinput">Имя</label>
      </>}
    </div>
  );
};
