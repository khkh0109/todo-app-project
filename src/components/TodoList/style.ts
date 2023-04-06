import styled from "styled-components";
import PRIORITY from "../../lib/priority";
import COLORS from "../../lib/colors";
import type { Priority } from "../../model/todoItem";

interface StyleListProps {
  priority: Priority;
}

const priorityColor = (priority: Priority): string => {
  switch (priority) {
    case PRIORITY.high:
      return COLORS.priority1;
    case PRIORITY.medium:
      return COLORS.priority2;
    case PRIORITY.low:
      return COLORS.priority3;
    case PRIORITY.default:
      return COLORS.gray;
  }
};

const TodoListWrapper = styled.ul`
  width: 100%;
  height: 100%;
  padding: 0 15px 67px 15px;
`;

const List = styled.li<StyleListProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 0;
  border-bottom: 1px solid ${COLORS.divider};
  color: ${COLORS.black};

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
      border: 2px solid ${props => priorityColor(props.priority)};
      border-radius: 6px;
      margin-right: 14px;
      cursor: pointer;
    }

    input:checked {
      background-color: ${props => priorityColor(props.priority)};
      background-image: url("/assets/check.svg");
      background-repeat: no-repeat;
      background-position: center;
    }

    input[type="text"] {
      flex-grow: 1;
      height: 20px;
      padding: 0;
      border: none;
      color: ${COLORS.black};
      caret-color: ${COLORS.main};
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
        fill: ${COLORS.priority1};
        stroke: ${COLORS.priority1};
      }
    }
  }

  :hover {
    path {
      fill: ${COLORS.gray};
      stroke: ${COLORS.gray};
    }
  }
`;

export { TodoListWrapper, List };
