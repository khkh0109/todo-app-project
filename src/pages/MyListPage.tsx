import { Link } from "react-router-dom";
import { useState } from "react";
import { nanoid } from "nanoid";
import { type TodoItem } from "../model/todoItem";

interface List {
  id: string;
  title: string;
  list: TodoItem[];
}

interface MyListPageProps {
  lists: List[];
  setLists: (newLists: List[]) => void;
}

function MyListPage({ lists, setLists }: MyListPageProps): JSX.Element {
  const [input, setInput] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const addList = (): void => {
    const newList = { id: nanoid(5), title: input, list: [] };
    setLists([...lists, newList]);
    setInput("");
  };

  const deleteList = (id: string): void => {
    const newLists = lists.filter(list => list.id !== id);
    setLists(newLists);
  };

  return (
    <>
      <h1>나의 목록</h1>
      <ul>
        {lists.map((list: List) => {
          return (
            <li key={list.id}>
              <Link to={`/${list.id}`}>{list.title}</Link>
              <button
                type="button"
                onClick={() => {
                  deleteList(list.id);
                }}
              >
                삭제
              </button>
            </li>
          );
        })}
      </ul>
      <input
        type="text"
        placeholder="목록을 입력하세요"
        onChange={handleInput}
        value={input}
      />
      <button type="button" onClick={addList}>
        목록 생성
      </button>
    </>
  );
}

export default MyListPage;
