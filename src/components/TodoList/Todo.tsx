import { useState } from "react";
import { List } from "./style";

interface TodoProps {
  id: string;
  todo: string;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, oldTodo: string, newTodo: string) => void;
}

function Todo({ id, todo, deleteTodo, updateTodo }: TodoProps): JSX.Element {
  const [isEditing, setIsEditing] = useState(false);
  const [newTodo, setNewTodo] = useState(todo);

  const handleEdit = (): void => {
    setIsEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTodo(e.target.value);
  };

  const handleSave = (): void => {
    if (newTodo.trim() !== "") {
      setIsEditing(false);
      updateTodo(id, todo, newTodo);
    }
  };

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Enter") {
      handleSave();
    }
  };

  return (
    <List>
      <div className="inputContainer">
        <input type="checkbox" />
        {isEditing ? (
          <input
            type="text"
            onKeyPress={handleKeyPress}
            value={newTodo}
            onChange={handleChange}
            onBlur={handleSave}
            autoFocus
          />
        ) : (
          <p onClick={handleEdit}>{todo}</p>
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
