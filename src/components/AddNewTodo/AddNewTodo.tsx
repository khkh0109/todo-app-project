import React, { useState } from "react";
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <AddNewTodoContainer>
        <div
          className="container"
          onClick={() => {
            setIsModalOpen(!isModalOpen);
          }}
        >
          <PlusIcon src="/assets/plus-icon.svg" />
          <NewTodo>새로운 할 일</NewTodo>
        </div>
      </AddNewTodoContainer>

      <AddNewTodoInputContainer className={isModalOpen ? "is-open" : ""}>
        <Input type="text" placeholder="새로운 할 일" />
        <ButtonContainer>
          <PriorityButton type="button">우선순위</PriorityButton>
          <AddButton type="button" />
        </ButtonContainer>
      </AddNewTodoInputContainer>
      <Overlay
        onClick={() => {
          setIsModalOpen(!isModalOpen);
        }}
        className={isModalOpen ? "is-active" : ""}
      />
    </>
  );
}

export { AddNewTodo };
