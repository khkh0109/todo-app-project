import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import AddNewTodo from "./components/AddNewTodo/AddNewTodo";

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoHeader title="할 일" count={0} />
      <AddNewTodo />
    </>
  );
}

export default App;
