import styled from "styled-components";
import COLORS from "../lib/colors";

const DeleteNoteButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;

  path {
    fill: transparent;
    stroke: transparent;
  }

  &:hover {
    cursor: pointer;
    svg path {
      fill: ${COLORS.priority1};
      stroke: ${COLORS.priority1};
    }
  }
`;

export default DeleteNoteButton;
