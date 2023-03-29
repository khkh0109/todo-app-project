import { TodoListWrapper } from "./style";
import Todo from "./Todo";

interface TodoItem {
  id: number;
  isDone: boolean;
  content: string;
  priority: 1 | 2 | 3 | 4;
}

interface TodosProps {
  todos: TodoItem[];
}

function TodoList({ todos }: TodosProps): JSX.Element {
  return (
    <TodoListWrapper>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo.content} />
      ))}
    </TodoListWrapper>
  );
}

export default TodoList;
