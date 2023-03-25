import styled from "styled-components";
import { colors } from "../../lib/colors";

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
  }

  input {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid ${colors.gray};
    border-radius: 6px;
    margin-right: 14px;
    flex-shrink: 0;
    cursor: pointer;
  }

  input:checked {
    border-color: ${colors.gray};
    background-color: ${colors.gray};
    background-image: url("/assets/check.svg");
    background-repeat: no-repeat;
    background-position: center;
  }

  p {
    font-size: 15px;
    line-height: 1.2666666667;
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

export { List };
