import styled, { keyframes } from "styled-components";
import { colors } from "../../lib/colors";
import { fontWeight } from "../../lib/typography";

// AddNewTodo
const AddNewTodoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 67px;
  padding: 15px;
  position: fixed;
  bottom: 0;
  background-color: ${colors.white};
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

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
  color: ${colors.main};
  font-size: 14.97px;
  font-weight: ${fontWeight.medium};
  line-height: 1.336005344;
`;

// AddNewTodoInput
const modalFadeIn = keyframes`
0% {
  transform: translate3d(0, 100%, 0);
}

100% {
  transform: translate3d(0, 0, 0);
}
`;

const AddNewTodoInputContainer = styled.div`
  display: none;
  width: 100%;
  height: 122px;
  border-radius: 20px 20px 0 0;
  padding: 35px 20px 20px 20px;
  position: fixed;
  bottom: 0;
  background-color: ${colors.white};
  box-shadow: 0px -20px 28px -9px rgba(0, 0, 0, 0.12);
  z-index: 1;

  &.is-open {
    display: block;
    animation: ${modalFadeIn} 300ms ease-in-out;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  margin-bottom: 20px;
  color: ${colors.black};
  caret-color: ${colors.main};
  background-color: transparent;

  ::placeholder {
    color: ${colors.gray};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
`;

const PriorityButton = styled(Button)`
  padding: 0 5px 1px 5px;
  border: 1px solid ${colors.gray};
  border-radius: 3px;
  color: ${colors.gray};
  font-size: 11px;
  line-height: 1.7272727273;
`;

const AddButton = styled(Button)`
  width: 20px;
  height: 20px;
  padding: 0;
  background-image: url("./assets/plus-icon.svg");
  background-repeat: no-repeat;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  background-color: ${colors.black};
  opacity: 0;
  visibility: hidden;
  transition: opacity 300ms ease-in-out, visibility 300ms ease-in-out;
  cursor: pointer;

  &.is-active {
    opacity: 0.3;
    visibility: visible;
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
  AddButton,
  Overlay,
};
