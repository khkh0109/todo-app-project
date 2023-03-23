import React from "react";
import Todo from "../components/Todo/Todo";
import TodoHeader from "../components/TodoHeader/TodoHeader";
import { AddNewTodo } from "../components/AddNewTodo/AddNewTodo";

function TodoList(): JSX.Element {
  return (
    <>
      <TodoHeader title="할 일" count={0} />
      <AddNewTodo />
      <Todo />
    </>
  );
}

export default TodoList;
