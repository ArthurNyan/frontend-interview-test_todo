/* VENDOR */
import { useState } from "react";
import { useSelector } from "react-redux";

/* APPLICATION */
import { selectAllCategories } from "../app/store/categoriesSlice";
import { ModalEditItem } from "../widgets/ModalEditItem/ModalEditItem";
import { ModalRemoveItem } from "../widgets/ModalRemoveItem/ModalRemoveItem";
import { EditIcon } from "../shared/assets/icons/EditIcon";
import { RemoveIcon } from "../shared/assets/icons";
import { ListItemProps } from "../shared/lib/ListItemProps";

export const ListItem: React.FC<ListItemProps> = ({ item }) => {
  const categories = useSelector(selectAllCategories),
    [editModalActive, setEditModalActive] = useState(false)
  let [removeModalActive, setRemoveModalActive] = useState(false);

  return (
    <>
      <li className="list-item">
        <div className="list-item-col1">
          <div className="list-item-col1-row1">
            <h3 className="list-item-col1-row1__title">{item.name}</h3>
            {item.category && (
              <span className="list-item-col1-row1__category">
                {
                  categories.find((category) => category.id === item.category)
                    ?.name
                }
              </span>
            )}
          </div>
          <div className="list-item-col1-row2">{item.description.length > 70 ? item.description.substring(0, 70) + '...' : item.description}</div>
        </div>
        <div className="list-item-col2">
          <button
            className="list-item-col2__btn"
            onClick={() => {
              setEditModalActive(true);
            }}
          >
            <EditIcon></EditIcon>
          </button>
          <button
            className="list-item-col2__btn"
            onClick={() => {
              setRemoveModalActive(true);
            }}
          >
            <RemoveIcon />
          </button>
        </div>
        <ModalEditItem
          item={item}
          active={editModalActive}
          setActive={setEditModalActive}
        />
        <ModalRemoveItem
          item={item}
          active={removeModalActive}
          setActive={setRemoveModalActive}
        />
      </li>
    </>
  );
};
