import { AddNewTodoInputContainer, Input, ButtonContainer } from "./style";

interface InputModalProps {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  isModalOpen: boolean;
  newTodo: string;
  children: React.ReactNode;
}

function InputModal({
  newTodo,
  isModalOpen,
  handleInputChange,
  handleKeyPress,
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
    </AddNewTodoInputContainer>
  );
}
export default InputModal;
