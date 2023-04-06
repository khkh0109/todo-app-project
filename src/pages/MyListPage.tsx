import { useState } from "react";
import { nanoid } from "nanoid";
import { type List } from "../types/interface";
import MyListHeader from "../components/MyListHeader/MyListHeader";
import MyList from "../components/MyList/MyList";
import AddNewList from "../components/AddNewList/AddNewList";

interface MyListPageProps {
  lists: List[];
  setLists: (lists: List[]) => void;
}

function MyListPage({ lists, setLists }: MyListPageProps): JSX.Element {
  const [input, setInput] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const addList = (): void => {
    if (input.trim() !== "") {
      const newList = { id: nanoid(5), title: input, list: [] };
      setLists([...lists, newList]);
      setInput("");
    }
  };

  const deleteList = (id: string): void => {
    const newLists = lists.filter(list => list.id !== id);
    setLists(newLists);
  };

  return (
    <>
      <MyListHeader />
      <MyList lists={lists} deleteList={deleteList} />
      <AddNewList
        input={input}
        handleInput={handleInput}
        addList={addList}
        setInput={setInput}
      />
    </>
  );
}

export default MyListPage;
