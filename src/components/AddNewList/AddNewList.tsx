import { useState } from "react";
import AddNewListButton from "../AddNewList/AddNewListButton";
import ListInputModal from "../AddNewList/ListInputModal";
import AddButton from "../../common/AddButton";
import Overlay from "../../common/Overlay";

interface AddNewListProps {
  input: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addList: () => void;
  setInput: (input: string) => void;
}

function AddNewList({
  input,
  handleInput,
  addList,
  setInput,
}: AddNewListProps): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      addList();
    }
  };

  return (
    <>
      <ListInputModal isModalOpen={isModalOpen}>
        <div className="container">
          <input
            type="text"
            placeholder="목록을 입력하세요"
            onChange={handleInput}
            value={input}
            onKeyPress={handleKeyPress}
          />
          <AddButton type="button" onClick={addList} />
        </div>
      </ListInputModal>
      <AddNewListButton
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      ></AddNewListButton>
      <Overlay
        isModalOpen={isModalOpen}
        onClick={() => {
          setIsModalOpen(false);
          setInput("");
        }}
      />
    </>
  );
}

export default AddNewList;
