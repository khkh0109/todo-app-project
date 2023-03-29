// import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import TodoListPage from "./pages/TodoListPage";

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <TodoListPage />
    </>
  );
}

export default App;
