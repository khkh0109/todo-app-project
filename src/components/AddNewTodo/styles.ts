import styled from "styled-components";
import { colors } from "../../lib/colors";
import { fontWeight } from "../../lib/typography";

const AddNewTodoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 67px;
  padding: 15px;
  position: fixed;
  bottom: 0;
  background-color: ${colors.white};
`;

const PlusIcon = styled.img`
  margin-right: 14px;
`;

const NewTodo = styled.span`
  color: ${colors.main};
  font-size: 14.97px;
  font-weight: ${fontWeight.medium};
  line-height: 1.336005344;
`;

export { AddNewTodoContainer, PlusIcon, NewTodo };
