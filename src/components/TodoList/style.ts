import styled from "styled-components";
import { colors } from "../../lib/colors";

const TodoListWrapper = styled.ul`
  width: 100%;
  height: 100%;
  padding: 0 15px 67px 15px;
`;

const List = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 0;
  border-bottom: 1px solid ${colors.divider};
  color: ${colors.black};

  .inputContainer {
    display: flex;
    align-items: center;
    width: 100%;
    margin-right: 10px;

    input[type="checkbox"] {
      appearance: none;
      flex-shrink: 0;
      width: 20px;
      height: 20px;
      border: 2px solid ${colors.gray};
      border-radius: 6px;
      margin-right: 14px;
      cursor: pointer;
    }

    input:checked {
      border-color: ${colors.gray};
      background-color: ${colors.gray};
      background-image: url("/assets/check.svg");
      background-repeat: no-repeat;
      background-position: center;
    }

    input[type="text"] {
      flex-grow: 1;
      height: 20px;
      padding: 0;
      border: none;
      color: ${colors.black};
      caret-color: ${colors.main};
    }

    input[type="text"],
    p {
      font-size: 15px;
      line-height: 1.2666666667;
      word-break: break-all;
    }
  }

  button {
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;

    path {
      fill: transparent;
      stroke: transparent;
    }

    :hover {
      cursor: pointer;
      path {
        fill: ${colors.priority1};
        stroke: ${colors.priority1};
      }
    }
  }

  :hover {
    path {
      fill: ${colors.gray};
      stroke: ${colors.gray};
    }
  }
`;

export { TodoListWrapper, List };
