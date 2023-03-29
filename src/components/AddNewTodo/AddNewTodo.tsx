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
import PRIORITY from "../../lib/priority";

interface TodoItem {
  id: number;
  isDone: boolean;
  content: string;
  priority: 1 | 2 | 3 | 4;
}

interface SetTodosProps {
  todos: TodoItem[];
  setTodos: (todos: TodoItem[]) => void;
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
      const newTodoItem: TodoItem = {
        id: todos.length,
        isDone: false,
        content: newTodo,
        priority: PRIORITY.DEFAULT,
      };
      setTodos([...todos, newTodoItem]);
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
