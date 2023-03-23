import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import TodoList from "./pages/TodoList";

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <TodoList />
    </>
  );
}

export default App;
