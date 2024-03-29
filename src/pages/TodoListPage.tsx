import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TodoHeader from "../components/TodoHeader/TodoHeader";
import TodoList from "../components/TodoList/TodoList";
import AddNewTodo from "../components/AddNewTodo/AddNewTodo";
import type { TodoItem } from "../model/todoItem";
import type ListItem from "../model/listItem";

interface TodoListPageProps {
  lists: ListItem[];
}

function TodoListPage({ lists }: TodoListPageProps): JSX.Element {
  const { listId } = useParams();
  const list = lists.find(list => list.id === listId);
  const init = list === undefined ? [] : list.list;

  const [todos, setTodos] = useState<TodoItem[]>(init);
  const done = todos.filter(todo => todo.isDone);

  const initCount = done === undefined ? 0 : done.length;
  const [count, setCount] = useState<number>(initCount);

  useEffect(() => {
    setCount(done === undefined ? 0 : done.length);
  }, [done]);

  if (list === undefined) {
    return <h1>List not found</h1>;
  }

  return (
    <>
      <TodoHeader title={list.title} count={count} />
      <TodoList todos={todos} setTodos={setTodos} />
      <AddNewTodo list={list} lists={lists} todos={todos} setTodos={setTodos} />
    </>
  );
}

export default TodoListPage;
