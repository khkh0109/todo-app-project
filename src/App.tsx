import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import MyListPage from "./pages/MyListPage";
import TodoListPage from "./pages/TodoListPage";
import { type List } from "./types/interface";

function App(): JSX.Element {
  const isListExists = "todoList" in localStorage;
  const initialLists = isListExists ? JSON.parse(localStorage.todoList) : [];
  const [lists, setLists] = useState<List[]>(initialLists);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(lists));
  }, [lists]);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={<MyListPage lists={lists} setLists={setLists} />}
        ></Route>
        <Route path="/:listId" element={<TodoListPage lists={lists} />}></Route>
      </Routes>
    </>
  );
}

export default App;
