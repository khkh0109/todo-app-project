import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import AddNewTodoButton from "./AddNewTodoButton";
import InputModal from "./InputModal";
import PriorityButton from "./PriorityButton";
import Overlay from "../../common/Overlay";
import AddButton from "../../common/AddButton";
import { type Priority, TodoItem } from "../../model/todoItem";
import type ListItem from "../../model/listItem";
import PRIORITY from "../../lib/priority";

interface AddNewTodoProps {
  list: ListItem | undefined;
  lists: ListItem[];
  todos: TodoItem[];
  setTodos: (todos: TodoItem[]) => void;
}

function AddNewTodo({
  list,
  lists,
  todos,
  setTodos,
}: AddNewTodoProps): JSX.Element {
  const [newTodo, setNewTodo] = useState("");
  const [priority, setPriority] = useState<Priority>(PRIORITY.default);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPriorityModalOpen, setIsPriorityModalOpen] = useState(false);

  useEffect(() => {
    if (list !== undefined) {
      list.list = todos;
      localStorage.setItem("todoList", JSON.stringify(lists));
    }
  }, [todos]);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTodo(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
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
        newTodo={newTodo}
        isModalOpen={isModalOpen}
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
