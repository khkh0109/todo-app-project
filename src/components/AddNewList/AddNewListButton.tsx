import {
  AddNewTodoContainer as AddNewListContainer,
  PlusIcon,
  NewTodo,
} from "../AddNewTodo/style";

interface AddNewListButtonProps {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

function AddNewListButton({
  isModalOpen,
  setIsModalOpen,
}: AddNewListButtonProps): JSX.Element {
  return (
    <>
      <AddNewListContainer>
        <div
          className="container"
          onClick={() => {
            setIsModalOpen(!isModalOpen);
          }}
        >
          <PlusIcon src="/assets/plus-icon.svg" />
          <NewTodo>새로운 목록</NewTodo>
        </div>
      </AddNewListContainer>
    </>
  );
}

export default AddNewListButton;
