import { useState } from "react";
import TodoHeader from "../components/TodoHeader/TodoHeader";
import TodoList from "../components/TodoList/TodoList";
import AddNewTodo from "../components/AddNewTodo/AddNewTodo";

function TodoListPage(): JSX.Element {
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <>
      <TodoHeader title="할 일" count={0} />
      <TodoList todos={todos} />
      <AddNewTodo todos={todos} setTodos={setTodos} />
    </>
  );
}

export default TodoListPage;
