import COLORS from "./../../lib/colors";
import styled from "styled-components";
import FONT_WEIGHT from "../../lib/typography";
import modalFadeIn from "../../lib/animation";
import priorityColor from "../priorityColor";
import type { Priority } from "../../model/todoItem";

interface StyleProps {
  priority: Priority;
}

const AddNewTodoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 67px;
  padding: 15px;
  position: fixed;
  bottom: 0;
  background-color: ${COLORS.white};
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media screen and (min-width: 576px) {
    width: 576px;
  }

  .container {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

const PlusIcon = styled.img`
  margin-right: 14px;
`;

const NewTodo = styled.span`
  color: ${COLORS.main};
  font-size: 14.97px;
  font-weight: ${FONT_WEIGHT.medium};
  line-height: 1.336005344;
`;

const AddNewTodoInputContainer = styled.div`
  display: none;
  width: 100%;
  height: 122px;
  border-radius: 20px 20px 0 0;
  padding: 35px 20px 20px 20px;
  position: fixed;
  bottom: 0;
  background-color: ${COLORS.white};
  box-shadow: 0px -20px 28px -9px rgba(0, 0, 0, 0.12);
  z-index: 1;

  @media screen and (min-width: 576px) {
    width: 576px;
  }

  &.is-open {
    display: block;
    animation: ${modalFadeIn} 300ms ease-in-out;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  margin-bottom: 20px;
  color: ${COLORS.black};
  caret-color: ${COLORS.main};
  background-color: transparent;

  ::placeholder {
    color: ${COLORS.gray};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PriorityButton = styled.button`
  padding: 0 5px 1px 5px;
  border: 1px solid ${COLORS.gray};
  border-radius: 3px;
  color: ${COLORS.gray};
  font-size: 11px;
  line-height: 1.7272727273;
  transition: all 200ms ease-in;

  :hover {
    border-color: ${COLORS.main};
    color: ${COLORS.main};
  }
`;

const Priorities = styled.ul`
  display: none;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: -172px;
  border-radius: 20px;
  color: ${COLORS.black};
  background: ${COLORS.white};
  cursor: pointer;

  &.is-open {
    display: flex;
  }
`;

const PriorityItem = styled.li<StyleProps>`
  display: flex;
  align-items: center;
  padding: 7px 20px;
  transition: background-color 200ms ease-in;

  ::before {
    content: "";
    display: block;
    width: 18px;
    height: 18px;
    background-color: ${props => priorityColor(props.priority)};
    border-radius: 50%;
    position: relative;
    top: 0.5px;
    margin-right: 7px;
  }

  :first-child {
    border-radius: 20px 20px 0 0;
  }

  :last-child {
    border-radius: 0 0 20px 20px;
  }

  :not(:last-child) {
    border-bottom: 1px solid ${COLORS.divider};
  }

  :hover {
    background-color: ${COLORS.hoverGrayBg};
  }

  :active {
    background: ${COLORS.gray};
  }
`;

export {
  AddNewTodoContainer,
  PlusIcon,
  NewTodo,
  AddNewTodoInputContainer,
  Input,
  ButtonContainer,
  PriorityButton,
  Priorities,
  PriorityItem,
};
