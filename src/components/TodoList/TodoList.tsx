import Todo from "./Todo";
import type { TodoItem } from "../../model/todoItem";
import { TodoListWrapper } from "./style";

interface TodosProps {
  todos: TodoItem[];
  setTodos: (todos: TodoItem[]) => void;
}

function TodoList({ todos, setTodos }: TodosProps): JSX.Element {
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

  const updateChecked = (id: string, checked: boolean): void => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, isDone: checked };
        }
        return todo;
      })
    );
  };

  return (
    <TodoListWrapper>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          id={todo.id}
          content={todo.content}
          isDone={todo.isDone}
          priority={todo.priority}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          updateChecked={updateChecked}
        />
      ))}
    </TodoListWrapper>
  );
}

export default TodoList;
