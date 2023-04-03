import { useState } from "react";
import TodoHeader from "../components/TodoHeader/TodoHeader";
import TodoList from "../components/TodoList/TodoList";
import AddNewTodo from "../components/AddNewTodo/AddNewTodo";
import type { Priority, TodoItem } from "../model/todoItem";
import PRIORITY from "../lib/priority";

function TodoListPage(): JSX.Element {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [priority, setPriority] = useState<Priority>(PRIORITY.DEFAULT);

  return (
    <>
      <TodoHeader title="할 일" count={0} />
      <TodoList todos={todos} setTodos={setTodos} setPriority={setPriority} />
      <AddNewTodo
        todos={todos}
        setTodos={setTodos}
        priority={priority}
        setPriority={setPriority}
      />
    </>
  );
}

export default TodoListPage;
