import { useState } from "react";
import TodoHeader from "../components/TodoHeader/TodoHeader";
import TodoList from "../components/TodoList/TodoList";
import AddNewTodo from "../components/AddNewTodo/AddNewTodo";
import type { Priority, TodoItem } from "../model/todoItem";
import PRIORITY from "../lib/priority";
import { useParams } from "react-router-dom";

interface List {
  id: string;
  title: string;
}

interface TodoListPageProps {
  lists: List[];
}

function TodoListPage({ lists }: TodoListPageProps): JSX.Element {
  const { listId } = useParams();
  const list = lists.find(list => list.id === listId);
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [priority, setPriority] = useState<Priority>(PRIORITY.default);

  if (list === undefined) {
    return <h1>List not found</h1>;
  }

  return (
    <>
      <TodoHeader title={list.title} count={0} />
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
