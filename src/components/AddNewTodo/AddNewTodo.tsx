import { AddNewTodoContainer, PlusIcon, NewTodo } from "./styles";

function AddNewTodo() {
  return (
    <AddNewTodoContainer>
      <PlusIcon src="/assets/plus-icon.svg" />
      <NewTodo>새로운 할 일</NewTodo>
    </AddNewTodoContainer>
  );
}

export default AddNewTodo;
