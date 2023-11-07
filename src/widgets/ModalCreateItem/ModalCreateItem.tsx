/* VENDOR */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

/* APPLICATION */
import { Modal } from "../Modal/Modal";
import { ModalHeader } from "../../features/ModalHeader/ModalHeader";
import { ModalInput } from "../../features/ModalInput/ModalInput";
import { ModalRow } from "../../features/ModalRow/ModalRow";
import { ModalTextarea } from "../../features/ModalTextarea/ModalTextarea";
import { ModalFooter } from "../../features/ModalFooter/ModalFooter";
import { tasksAdded } from "../../app/store/tasksSlice";
import { categoriesAdded } from "../../app/store/categoriesSlice";
import { ModalCreateItemProps } from "../../shared/lib/ModalCreateItemProps";

export const ModalCreateItem: React.FC<ModalCreateItemProps> = ({
  active,
  setActive,
}) => {
  const dispatch = useDispatch(),
    { pathname } = useLocation(),
    isCategories = pathname.includes("categories"),
    [name, setName] = useState(""),
    [selected, setSelected] = useState(""),
    [description, setDescription] = useState("");

  function clearState() {
    setName("");
    setDescription("");
    setSelected("");
  }

  return (
    <Modal active={active} setActive={setActive} clearState={clearState}>
      <ModalHeader
        clearState={clearState}
        setActive={setActive}
        title={isCategories ? "Создание категории" : "Создание задачи"}
      />
      {isCategories ? (
        <ModalInput name={name} setName={setName} size="large" />
      ) : (
        <ModalRow
          name={name}
          setName={setName}
          selected={selected}
          setSelected={setSelected}
        />
      )}
      <ModalTextarea
        description={description}
        setDescription={setDescription}
      />
      <ModalFooter
        setActive={setActive}
        clearState={clearState}
        submitBtnText="Создать"
        size="large"
        onSubmit={
          name
            ? () => {
              dispatch(
                isCategories
                  ? categoriesAdded({ name, description })
                  : tasksAdded({
                    name,
                    description,
                    category: setSelected,
                  })
              );
              clearState();
              setActive(false);
            }
            : () => { }
        }
      />
    </Modal>
  );
};
