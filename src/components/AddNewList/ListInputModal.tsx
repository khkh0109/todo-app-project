import ModalContainer from "./style";

interface ListInputModalProps {
  children: React.ReactNode;
  isModalOpen: boolean;
}

function ListInputModal({
  children,
  isModalOpen,
}: ListInputModalProps): JSX.Element {
  return (
    <ModalContainer className={isModalOpen ? "is-open" : ""}>
      {children}
    </ModalContainer>
  );
}

export default ListInputModal;
