import PriorityModal from "./PriorityModal";
import { AddNewTodoInputContainer, Input, ButtonContainer } from "./style";
import { type Priority } from "../../model/todoItem";

interface InputModalProps {
  newTodo: string;
  isModalOpen: boolean;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  setPriority: (priority: Priority) => void;
  isPriorityModalOpen: boolean;
  setIsPriorityModalOpen: (isPriorityModalOpen: boolean) => void;
  children: React.ReactNode;
}

function InputModal({
  newTodo,
  isModalOpen,
  handleInputChange,
  handleKeyPress,
  setPriority,
  isPriorityModalOpen,
  setIsPriorityModalOpen,
  children,
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
