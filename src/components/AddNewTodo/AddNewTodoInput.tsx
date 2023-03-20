import {
  AddNewTodoInputContainer,
  Input,
  ButtonContainer,
  PriorityButton,
  AddButton,
} from "./styles";

function AddNewTodoInput() {
  return (
    <AddNewTodoInputContainer>
      <Input type="text" placeholder="새로운 할 일" />
      <ButtonContainer>
        <PriorityButton type="button">우선순위</PriorityButton>
        <AddButton type="button" />
      </ButtonContainer>
    </AddNewTodoInputContainer>
  );
}

export default AddNewTodoInput;
