import { useState } from "react";
import type { Priority } from "../../model/todoItem";
import { List } from "./style";

interface TodoProps {
  id: string;
  content: string;
  isDone: boolean;
  priority: Priority;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, newTodo: string) => void;
  updateChecked: (id: string, checked: boolean) => void;
}

function Todo({
  id,
  content,
  isDone,
  priority,
  deleteTodo,
  updateTodo,
  updateChecked,
}: TodoProps): JSX.Element {
  const [newTodo, setNewTodo] = useState(content);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (): void => {
    setIsEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTodo(e.target.value);
  };

  const handleSave = (): void => {
    if (newTodo.trim() !== "") {
      setIsEditing(false);
      updateTodo(id, newTodo);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>): void => {
    updateChecked(id, e.target.checked);
  };

  return (
    <List priority={priority}>
      <div className="inputContainer">
        <input type="checkbox" onChange={handleChecked} checked={isDone} />
        {isEditing ? (
          <input
            type="text"
            value={newTodo}
            autoFocus
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onBlur={handleSave}
          />
        ) : (
          <p onClick={handleEdit}>{content}</p>
        )}
      </div>
      <button
        type="button"
        onClick={() => {
          deleteTodo(id);
        }}
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.00002 2.41421L2.41423 1L9.4853 8.07107L8.07108 9.48528L1.00002 2.41421Z"
            fill="#C4C4C4"
            stroke="#C4C4C4"
            strokeWidth="0.5"
          />
          <path
            d="M8.07106 1.00009L9.48528 2.41431L2.41421 9.48537L0.999994 8.07116L8.07106 1.00009Z"
            fill="#C4C4C4"
            stroke="#C4C4C4"
            strokeWidth="0.5"
          />
        </svg>
      </button>
    </List>
  );
}

export default Todo;
