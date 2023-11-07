/* VENDOR */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

/* APPLICATION */
import { Modal } from "../Modal/Modal";
import { ModalHeader } from "../../features/ModalHeader/ModalHeader";
import { ModalRow } from "../../features/ModalRow/ModalRow";
import { ModalInput } from "../../features/ModalInput/ModalInput";
import { ModalTextarea } from "../../features/ModalTextarea/ModalTextarea";
import { ModalFooter } from "../../features/ModalFooter/ModalFooter";
import { tasksUpdated } from "../../app/store/tasksSlice";
import { categoriesUpdated } from "../../app/store/categoriesSlice";
import { ModalItemIconProps } from "../../shared/lib/ModalItemInconProps";

export const ModalEditItem: React.FC<ModalItemIconProps> = ({
  item,
  active,
  setActive,
}) => {
  const dispatch = useDispatch(),
    { pathname } = useLocation(),
    isCategories = pathname.includes("categories"),
    [name, setName] = useState(item.name),
    [selected, setSelected] = useState(item.category || ""),
    [description, setDescription] = useState(item.description);

  return (
    <Modal item={item} active={active} setActive={setActive} >
      <ModalHeader
        setActive={setActive}
        title={
          isCategories ? "Редактирование категории" : "Редактирование задачи"
        }
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
        submitBtnText="Сохранить"
        size="large"
        onSubmit={() => {
          dispatch(
            isCategories
              ? categoriesUpdated({ id: item.id, name, description })
              : tasksUpdated({
                id: item.id,
                name,
                description,
                category: selected,
              })
          );
          setActive(false);
        }}
      />
    </Modal>
  );
};
