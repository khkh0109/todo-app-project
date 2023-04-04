import GlobalStyle from "./components/GlobalStyle";
import MyListPage from "./pages/MyListPage";
import { Routes, Route } from "react-router-dom";
import TodoListPage from "./pages/TodoListPage";
import { useState } from "react";

interface List {
  id: string;
  title: string;
}

function App(): JSX.Element {
  const [lists, setLists] = useState<List[]>([]);

  const addList = (newList: List): void => {
    setLists([...lists, newList]);
  };

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <MyListPage lists={lists} setLists={setLists} addList={addList} />
          }
        ></Route>
        <Route path="/:listId" element={<TodoListPage lists={lists} />}></Route>
      </Routes>
    </>
  );
}

export default App;
