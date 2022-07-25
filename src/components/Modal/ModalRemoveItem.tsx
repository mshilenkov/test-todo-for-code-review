/* VENDOR */
import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

/* APPLICATION */
import { Modal } from "./Modal";
import { ModalHeader } from "./ModalHeader";
import { ModalText } from "./ModalText";
import { ModalFooter } from "./ModalFooter";
import { tasksRemoved, tasksClearedCategories } from "../../store/slices/tasksSlice";
import { categoriesRemoved } from "../../store/slices/categoriesSlice";

interface ModalRemoveItemProps {
  item: {
    id: string;
    name: string;
    description: string;
    category?: string;
  };
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalRemoveItem: React.FC<ModalRemoveItemProps> = ({
  item,
  active,
  setActive,
}) => {

  // мне не очень нравится такой способ объявления переменных
  const dispatch = useDispatch(),
    { pathname } = useLocation(),
    isCategories = pathname.includes("categories"),

    // Мы же можем удалить не только задачу, но и категорию
    text = `Вы уверены, что хотите удалить задачу "${item.name}"?`;

  return (
    <Modal item={item} active={active} setActive={setActive}>
      {/*title тоже можно прокидывать пропсами в зависимости от того что удаляем*/}
      <ModalHeader setActive={setActive} title={"Удаление задачи"} />
      <ModalText text={text} />
      <ModalFooter
        setActive={setActive}
        submitBtnText="Да"
        onSubmit={
          isCategories
            ? () => {
                dispatch(categoriesRemoved(item.id));
                dispatch(tasksClearedCategories(item.id));
              }
            : () => dispatch(tasksRemoved(item.id))
        }
      />
    </Modal>
  );
};
