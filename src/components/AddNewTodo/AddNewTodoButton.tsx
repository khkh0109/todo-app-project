import { AddNewTodoContainer, PlusIcon, NewTodo } from "./style";

interface AddNewTodoButtonProps {
  onClick: () => void;
}

function AddNewTodoButton({ onClick }: AddNewTodoButtonProps): JSX.Element {
  return (
    <AddNewTodoContainer>
      <div className="container" onClick={onClick}>
        <PlusIcon src="/assets/plus-icon.svg" />
        <NewTodo>새로운 할 일</NewTodo>
      </div>
    </AddNewTodoContainer>
  );
}

export default AddNewTodoButton;
