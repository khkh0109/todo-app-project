import { TodoListWrapper } from "./style";
import Todo from "./Todo";
import type TodoItem from "../../model/todoItem";

interface TodosProps {
  todos: TodoItem[];
  setTodos: (todos: TodoItem[]) => void;
}

function TodoList({ todos, setTodos }: TodosProps): JSX.Element {
  const deleteTodo = (id: string): void => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <TodoListWrapper>
      {todos.map(todo => (
        <Todo key={todo.id} id={todo.id} todo={todo.content} deleteTodo={deleteTodo} />
      ))}
    </TodoListWrapper>
  );
}

export default TodoList;
