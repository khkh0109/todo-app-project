import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { TodoItem } from "../../model/todoItem";
import AddNewTodoButton from "./AddNewTodoButton";
import InputModal from "./InputModal";
import PriorityButton from "./PriorityButton";
import { AddButton } from "./style";
import Overlay from "./Overlay";
import { type Priority } from "../../model/todoItem";

interface List {
  id: string;
  title: string;
  list: TodoItem[];
}

interface AddNewTodoProps {
  todos: TodoItem[];
  setTodos: (todos: TodoItem[]) => void;
  priority: Priority;
  setPriority: (priority: Priority) => void;
  lists: List[];
  setLists: (lists: List[]) => void;
  listId: string | undefined;
  list: List | undefined;
  listIdx: number;
}

function AddNewTodo({
  todos,
  setTodos,
  priority,
  setPriority,
  lists,
  setLists,
  listId,
  list,
  listIdx,
}: AddNewTodoProps): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPriorityModalOpen, setIsPriorityModalOpen] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNewTodo(event.target.value);
  };

  const addTodo = (priority: Priority): void => {
    if (newTodo.trim() !== "") {
      const newTodoItem: TodoItem = new TodoItem(
        nanoid(5),
        newTodo,
        false,
        priority
      );
      setTodos([...todos, newTodoItem]);
      setNewTodo("");
    }
  };

  useEffect(() => {
    if (list !== undefined) {
      list.list = todos;
      localStorage.setItem("todoList", JSON.stringify(lists));
    }
  }, [todos]);

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Enter") {
      addTodo(priority);
    }
  };

  return (
    <>
      <AddNewTodoButton
        onClick={() => {
          setIsModalOpen(!isModalOpen);
        }}
      />

      <InputModal
        isModalOpen={isModalOpen}
        newTodo={newTodo}
        handleInputChange={handleInputChange}
        handleKeyPress={handleKeyPress}
        setPriority={setPriority}
        isPriorityModalOpen={isPriorityModalOpen}
        setIsPriorityModalOpen={setIsPriorityModalOpen}
      >
        <PriorityButton
          onClick={() => {
            setIsPriorityModalOpen(!isPriorityModalOpen);
          }}
        />
        <AddButton
          type="button"
          onClick={() => {
            addTodo(priority);
          }}
        />
      </InputModal>

      <Overlay
        isModalOpen={isModalOpen}
        onClick={() => {
          setIsModalOpen(!isModalOpen);
          setNewTodo("");
          setIsPriorityModalOpen(false);
        }}
      />
    </>
  );
}

export default AddNewTodo;
