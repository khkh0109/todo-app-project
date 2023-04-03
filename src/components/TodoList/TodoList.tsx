import { useEffect } from "react";
import { TodoListWrapper } from "./style";
import Todo from "./Todo";
import type { Priority, TodoItem } from "../../model/todoItem";

interface TodosProps {
  todos: TodoItem[];
  setTodos: (todos: TodoItem[]) => void;
  setPriority: (priority: Priority) => void;
}

function TodoList({ todos, setTodos, setPriority }: TodosProps): JSX.Element {
  const deleteTodo = (id: string): void => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id: string, newTodo: string): void => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, content: newTodo };
        }
        return todo;
      })
    );
  };

  useEffect(() => {
    setPriority(4);
  }, [todos]);

  return (
    <TodoListWrapper>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          id={todo.id}
          todo={todo.content}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          priority={todo.priority}
        />
      ))}
    </TodoListWrapper>
  );
}

export default TodoList;
