import { useState } from "react";
import TodoHeader from "../components/TodoHeader/TodoHeader";
import TodoList from "../components/TodoList/TodoList";
import AddNewTodo from "../components/AddNewTodo/AddNewTodo";

interface TodoItem {
  id: number;
  isDone: boolean;
  content: string;
  priority: 1 | 2 | 3 | 4;
}

function TodoListPage(): JSX.Element {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  return (
    <>
      <TodoHeader title="할 일" count={0} />
      <TodoList todos={todos} />
      <AddNewTodo todos={todos} setTodos={setTodos} />
    </>
  );
}

export default TodoListPage;
