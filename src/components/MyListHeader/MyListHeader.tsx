import styled from "styled-components";
import COLORS from "../../lib/colors";

const Header = styled.h1`
  padding: 16px;
  font-size: 33.97px;
  color: ${COLORS.main};
  border-bottom: 1px solid ${COLORS.divider};
`;

function MyListHeader(): JSX.Element {
  return <Header>나의 목록</Header>;
}

export default MyListHeader;
