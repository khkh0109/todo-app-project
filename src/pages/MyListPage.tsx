import { useState } from "react";
import { nanoid } from "nanoid";
import MyListHeader from "../components/MyListHeader/MyListHeader";
import MyList from "../components/MyList/MyList";
import AddNewList from "../components/AddNewList/AddNewList";
import ListItem from "../model/listItem";

interface MyListPageProps {
  lists: ListItem[];
  setLists: (lists: ListItem[]) => void;
}

function MyListPage({ lists, setLists }: MyListPageProps): JSX.Element {
  const [input, setInput] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const addList = (): void => {
    if (input.trim() !== "") {
      const newList = new ListItem(nanoid(5), input, []);
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
