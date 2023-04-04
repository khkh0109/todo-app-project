import styled from "styled-components";
import COLORS from "../../lib/colors";

const TodoHeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 15px 6px 15px;
  border-bottom: 1px solid ${COLORS.divider};
  background-color: ${COLORS.white};
  position: sticky;
  top: 0;
`;

const ListButton = styled.button`
  display: flex;
  align-items: center;
  margin-bottom: 7.59px;
  color: ${COLORS.main};
  font-size: 13px;
  line-height: 1;
  cursor: pointer;

  :before {
    content: "";
    width: 8.12px;
    height: 13.41px;
    margin-right: 6px;
    background-image: url("/assets/todo-header.svg");
    background-repeat: no-repeat;
  }
`;

const Title = styled.h1`
  margin-bottom: 7px;
  color: ${COLORS.main};
  font-size: 33.97px;
  line-height: 1.4424492199;
`;

const Completed = styled.span`
  color: ${COLORS.gray};
  font-size: 13px;
`;

export { TodoHeaderContainer, ListButton, Title, Completed };
