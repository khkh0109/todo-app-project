import { AddNewTodoInputContainer, Input, ButtonContainer } from "./style";
import PriorityModal from "./PriorityModal";
import { type Priority } from "../../model/todoItem";

interface InputModalProps {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  isModalOpen: boolean;
  newTodo: string;
  children: React.ReactNode;
  setPriority: (priority: Priority) => void;
  isPriorityModalOpen: boolean;
  setIsPriorityModalOpen: (isPriorityModalOpen: boolean) => void;
}

function InputModal({
  newTodo,
  isModalOpen,
  handleInputChange,
  handleKeyPress,
  children,
  setPriority,
  isPriorityModalOpen,
  setIsPriorityModalOpen,
}: InputModalProps): JSX.Element {
  return (
    <AddNewTodoInputContainer className={isModalOpen ? "is-open" : ""}>
      <Input
        type="text"
        value={newTodo}
        placeholder="새로운 할 일"
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <ButtonContainer>{children}</ButtonContainer>
      <PriorityModal
        setPriority={setPriority}
        isPriorityModalOpen={isPriorityModalOpen}
        setIsPriorityModalOpen={setIsPriorityModalOpen}
      />
    </AddNewTodoInputContainer>
  );
}
export default InputModal;
