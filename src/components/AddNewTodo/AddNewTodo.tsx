import React from "react";
import {
  AddNewTodoContainer,
  PlusIcon,
  NewTodo,
  AddNewTodoInputContainer,
  Input,
  ButtonContainer,
  PriorityButton,
  AddButton,
  Overlay,
} from "./style";

function AddNewTodo(): JSX.Element {
  return (
    <AddNewTodoContainer>
      <PlusIcon src="/assets/plus-icon.svg" />
      <NewTodo>새로운 할 일</NewTodo>
    </AddNewTodoContainer>
  );
}

function AddNewTodoInput(): JSX.Element {
  return (
    <>
      <AddNewTodoInputContainer>
        <Input type="text" placeholder="새로운 할 일" />
        <ButtonContainer>
          <PriorityButton type="button">우선순위</PriorityButton>
          <AddButton type="button" />
        </ButtonContainer>
      </AddNewTodoInputContainer>
      <Overlay />
    </>
  );
}

export { AddNewTodo, AddNewTodoInput };
