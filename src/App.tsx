import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import TodoHeader from "./components/TodoHeader/TodoHeader";

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoHeader title="할 일" count={0}></TodoHeader>
    </>
  );
}

export default App;
