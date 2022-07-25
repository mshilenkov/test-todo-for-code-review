import close from "../../assets/icons/close.svg";

interface ModalHeaderProps {
  clearState?(): void;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
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
        <img src={close} alt="close" />
      </button>
    </header>
  );
};
