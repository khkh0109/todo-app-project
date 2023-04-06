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
  list: TodoItem[];
}

interface TodoListPageProps {
  lists: List[];
  setLists: (lists: List[]) => void;
}

function TodoListPage({ lists, setLists }: TodoListPageProps): JSX.Element {
  const { listId } = useParams();
  const list = lists.find(list => list.id === listId);
  const listIdx = lists.findIndex(list => list.id === listId);
  const init = list === undefined ? [] : list.list;
  const [todos, setTodos] = useState<TodoItem[]>(init);
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
        lists={lists}
        setLists={setLists}
        listId={listId}
        list={list}
        listIdx={listIdx}
      />
    </>
  );
}

export default TodoListPage;
