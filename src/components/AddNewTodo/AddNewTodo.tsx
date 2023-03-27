import { useState } from "react";
import {
  AddNewTodoContainer,
  PlusIcon,
  NewTodo,
  AddNewTodoInputContainer,
  Input,
  ButtonContainer,
  PriorityButton,
  AddButton,
  Overlay,
} from "./style";

interface SetTodosProps {
  todos: string[];
  setTodos: (todos: string[]) => void;
}

function AddNewTodo({ todos, setTodos }: SetTodosProps): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNewTodo(event.target.value);
  };

  const addTodo = (): void => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  return (
    <>
      <AddNewTodoContainer>
        <div
          className="container"
          onClick={() => {
            setIsModalOpen(!isModalOpen);
          }}
        >
          <PlusIcon src="/assets/plus-icon.svg" />
          <NewTodo>새로운 할 일</NewTodo>
        </div>
      </AddNewTodoContainer>

      {/* Modal */}
      <AddNewTodoInputContainer className={isModalOpen ? "is-open" : ""}>
        <Input
          type="text"
          value={newTodo}
          placeholder="새로운 할 일"
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <ButtonContainer>
          <PriorityButton type="button">우선순위</PriorityButton>
          <AddButton type="button" onClick={addTodo} />
        </ButtonContainer>
      </AddNewTodoInputContainer>
      <Overlay
        onClick={() => {
          setIsModalOpen(!isModalOpen);
          setNewTodo("");
        }}
        className={isModalOpen ? "is-active" : ""}
      />
    </>
  );
}

export default AddNewTodo;
