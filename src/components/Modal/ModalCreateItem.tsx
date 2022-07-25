/* VENDOR */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

/* APPLICATION */
import { Modal } from "./Modal";
import { ModalHeader } from "./ModalHeader";
import { ModalInput } from "./ModalInput";
import { ModalRow } from "./ModalRow";
import { ModalTextarea } from "./ModalTextarea";
import { ModalFooter } from "./ModalFooter";
import { tasksAdded } from "../../store/slices/tasksSlice";
import { categoriesAdded } from "../../store/slices/categoriesSlice";

interface ModalCreateItemProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

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
          // здесь необходм рефакторинг, начать можно с выноса в отдельную ф-цию
          name
            ? () => {
                dispatch(
                  isCategories
                    ? categoriesAdded({ name, description })
                    : tasksAdded({
                        name,
                        description,
                        category: selected,
                      })
                );
                clearState();
                setActive(false);
              }
            : () => {}
        }
      />
    </Modal>
  );
};
