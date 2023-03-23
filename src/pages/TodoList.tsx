import React from "react";
import styled from "styled-components";
import Todo from "../components/Todo/Todo";
import TodoHeader from "../components/TodoHeader/TodoHeader";
import { AddNewTodo } from "../components/AddNewTodo/AddNewTodo";

const TodoListWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 15px 67px 15px;
`;

function TodoList(): JSX.Element {
  return (
    <>
      <TodoHeader title="할 일" count={0} />
      <TodoListWrapper>
        <Todo />
      </TodoListWrapper>
      <AddNewTodo />
    </>
  );
}

export default TodoList;
