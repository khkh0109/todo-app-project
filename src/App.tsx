import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import {
  AddNewTodo,
  AddNewTodoInput,
} from "./components/AddNewTodo/AddNewTodo";
import Todo from "./components/Todo/Todo";

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <TodoHeader title="할 일" count={0} />
      <AddNewTodo />
      <AddNewTodoInput />
      <Todo></Todo>
    </>
  );
}

export default App;
