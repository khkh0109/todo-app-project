import { TodoListWrapper } from "./style";
import Todo from "./Todo";

interface TodosProps {
  todos: string[];
}

function TodoList({ todos }: TodosProps): JSX.Element {
  return (
    <TodoListWrapper>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </TodoListWrapper>
  );
}

export default TodoList;
